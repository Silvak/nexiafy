"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import SectionContainer from "@/components/common/SectionContainer";
import { company, type CompanyMember } from "@/config/landingContent";

const RING_SECONDS = 8;

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

interface ProfileAvatarProps {
  member: CompanyMember;
  active: boolean;
  runId: number;
  reduceMotion: boolean;
  onSelect: () => void;
  onCycle: () => void;
}

function ProfileAvatar({
  member,
  active,
  runId,
  reduceMotion,
  onSelect,
  onCycle,
}: ProfileAvatarProps) {
  const ringRef = useRef<SVGCircleElement>(null);
  const onCycleRef = useRef(onCycle);
  onCycleRef.current = onCycle;

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring || !active) return;

    if (reduceMotion) {
      ring.setAttribute("stroke-dashoffset", "0");
      return;
    }

    const start = performance.now();
    const duration = RING_SECONDS * 1000;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      ring.setAttribute("stroke-dashoffset", String(1 - progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }
      onCycleRef.current();
    };

    ring.setAttribute("stroke-dashoffset", "1");
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduceMotion, runId]);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={member.name}
      onClick={onSelect}
      className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full p-2 md:h-20 md:w-20 md:p-3"
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        aria-hidden
        className="absolute h-full w-full -rotate-90"
      >
        <circle
          cx="40"
          cy="40"
          r="40"
          className="fill-transparent stroke-gray-5/10"
          strokeWidth="6"
        />
        {active ? (
          <circle
            ref={ringRef}
            key={runId}
            cx="40"
            cy="40"
            r="40"
            pathLength={1}
            strokeDasharray="1"
            className="fill-transparent stroke-brand-rose-1"
            strokeWidth="6"
          />
        ) : null}
      </svg>
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gray-8 text-xs font-medium text-gray-1 md:text-sm">
        {initials(member.name)}
      </div>
    </button>
  );
}

function MemberDetails({ member }: { member: CompanyMember }) {
  return (
    <>
      <div className="flex w-full flex-col justify-center gap-1 md:justify-start">
        <h3 className="text-lg font-medium text-gray-5">{member.name}</h3>
        <h4 className="text-base text-gray-8 md:text-gray-6">{member.role}</h4>
      </div>
      <p className="text-base text-gray-5 lg:line-clamp-5">{member.bio}</p>
    </>
  );
}

export default function CompanySection() {
  const reduceMotion = useReducedMotion() === true;
  const [index, setIndex] = useState(0);
  const [runId, setRunId] = useState(0);
  const members = company.members;
  const member = members[index] ?? members[0];

  function selectMember(nextIndex: number) {
    setIndex(nextIndex);
    setRunId((current) => current + 1);
  }

  function cycleMember() {
    setIndex((current) => (current + 1) % members.length);
    setRunId((current) => current + 1);
  }

  if (!member) return null;

  return (
    <SectionContainer spacing="compact">
      <div className="grid grid-cols-1 content-start items-start overflow-hidden rounded-[20px] bg-gray-11 md:rounded-4xl lg:grid-cols-2">
        <div className="flex w-full flex-col items-start gap-12 px-5 pt-5 pb-12 md:gap-12 md:px-8 md:py-12 lg:gap-16 lg:p-12 lg:pb-14">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2 className="text-xl font-bold text-gray-5 md:text-2xl">
              {company.title}
            </h2>
            <p className="text-base font-medium text-gray-8 md:text-lg lg:text-gray-5">
              {company.description}
            </p>
          </div>
          <Link
            id={company.cta.id}
            href={company.cta.href}
            className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] flex h-12 items-center justify-center space-x-3 rounded-full bg-gray-5/5 pr-4 pl-6 text-sm transition-all duration-500 hover:scale-95 hover:opacity-90"
          >
            <span className="text-gray-1">{company.cta.label}</span>
            <ArrowRight
              aria-hidden
              className="h-4 w-4 text-brand-rose-1"
              strokeWidth={2}
            />
          </Link>
        </div>
        <div className="grid h-full grid-rows-[auto_1fr] gap-5 border-l-0 bg-gray-10 px-5 pt-5 pb-8 md:gap-12 md:border-l md:border-white/5 md:px-8 md:py-12 lg:gap-14 lg:p-12 lg:pb-14">
          <div className="relative mx-auto flex w-full max-w-xs items-center justify-between md:max-w-md lg:max-w-none">
            {members.map((person, personIndex) => (
              <ProfileAvatar
                key={person.id}
                member={person}
                active={person.id === member.id}
                runId={runId}
                reduceMotion={reduceMotion}
                onSelect={() => selectMember(personIndex)}
                onCycle={cycleMember}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 content-end items-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={member.id}
                aria-live="polite"
                className="grid grid-cols-1 content-end items-end gap-5 md:gap-12"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  ease: "easeOut",
                }}
              >
                <MemberDetails member={member} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
