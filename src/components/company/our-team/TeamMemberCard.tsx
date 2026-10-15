"use client";

import { useState } from "react";

import type { TeamMember } from "@/config/ourTeamContent";

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      className="text-gray-1"
      aria-hidden
    >
      <g clipPath="url(#clip0_team_linkedin)">
        <path
          d="M10.91 0H1.09C0.49 0 0 0.49 0 1.09V10.91C0 11.51 0.49 12 1.09 12H10.91C11.51 12 12 11.51 12 10.91V1.09C12 0.49 11.51 0 10.91 0ZM3.71 10.36C3.71 10.54 3.57 10.68 3.4 10.68H2.05C1.88 10.68 1.74 10.54 1.74 10.36V4.72C1.74 4.55 1.88 4.41 2.05 4.41H3.4C3.57 4.41 3.71 4.55 3.71 4.72V10.36ZM2.73 3.88C2.02 3.88 1.45 3.31 1.45 2.6C1.45 1.89 2.02 1.32 2.73 1.32C3.43 1.32 4 1.89 4 2.6C4 3.31 3.43 3.88 2.73 3.88ZM10.74 10.39C10.74 10.55 10.61 10.68 10.45 10.68H9.01C8.85 10.68 8.72 10.55 8.72 10.39V7.74C8.72 7.35 8.83 6.01 7.69 6.01C6.8 6.01 6.62 6.93 6.58 7.34V10.39C6.58 10.55 6.45 10.68 6.29 10.68H4.89C4.73 10.68 4.6 10.55 4.6 10.39V4.7C4.6 4.54 4.73 4.41 4.89 4.41H6.29C6.45 4.41 6.58 4.54 6.58 4.7V5.19C6.91 4.7 7.4 4.31 8.44 4.31C10.75 4.31 10.74 6.47 10.74 7.66V10.39Z"
          fill="currentColor"
          className="mix-blend-screen"
        />
      </g>
      <defs>
        <clipPath id="clip0_team_linkedin">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [expanded, setExpanded] = useState(false);
  const linkedinId = `${member.id}-linkedin`;

  return (
    <div className="relative flex w-[calc(100%-1.25rem)] shrink-0 flex-col gap-5 md:w-[calc(33%-1rem)] lg:w-[calc(25%-0.75rem)]">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-10">
        <div className="flex h-full w-full items-center justify-center text-3xl font-medium text-gray-1 md:text-4xl">
          {initials(member.name)}
        </div>
      </div>
      <div className="flex flex-col gap-3 px-0.5">
        <span className="text-xs font-medium text-gray-6">{member.role}</span>
        <h3 className="text-lg font-medium text-gray-1">{member.name}</h3>
        <div className="relative">
          <p
            className={`overflow-hidden text-sm text-gray-6 ${
              expanded ? "" : "line-clamp-5"
            }`}
          >
            {member.bio}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            type="button"
            className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] rounded-lg bg-gray-11 px-3 py-2 text-xs font-medium text-gray-6 transition-all duration-300 hover:scale-95 hover:text-gray-1 hover:opacity-90"
            aria-expanded={expanded}
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
          {member.linkedinUrl ? (
            <a
              className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] flex h-8 w-8 items-center justify-center rounded-lg bg-gray-11 text-gray-6 transition-all duration-300 hover:scale-95 hover:opacity-90"
              id={linkedinId}
              target="_blank"
              rel="noopener noreferrer"
              href={member.linkedinUrl}
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
