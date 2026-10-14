"use client";

import { useEffect, useRef } from "react";

import {
  advanceParticles,
  createParticles,
  type Particle,
} from "./particles";

const PARTICLE_COUNT = 48;
const FILL_COLOR = "#03b35c";

interface HeroParticlesProps {
  className?: string;
}

export default function HeroParticles({ className = "" }: HeroParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) {
        return;
      }
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = createParticles(PARTICLE_COUNT, { width, height });
    };

    const draw = (time: number) => {
      const parent = canvas.parentElement;
      if (!parent || !ctx) {
        return;
      }

      const { width, height } = parent.getBoundingClientRect();
      const delta = lastTimeRef.current ? time - lastTimeRef.current : 16;
      lastTimeRef.current = time;

      if (!media.matches) {
        particlesRef.current = advanceParticles(
          particlesRef.current,
          { width, height },
          delta,
        );
      }

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = FILL_COLOR;
      ctx.globalCompositeOperation = "source-over";

      for (const particle of particlesRef.current) {
        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      frameRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
