"use client";

import { motion, useReducedMotion, type MotionValue } from "motion/react";
import { useEffect, useRef } from "react";

import {
  createSphereScene,
  type SphereScene,
} from "@/components/landing/hero-sphere/createSphereScene";

const edgeFadeMask = "radial-gradient(circle at center, #000 45%, transparent 72%)";
const MIN_VISIBLE_OPACITY = 0.01;

type HeroSphereProps = {
  opacity: MotionValue<number>;
};

/**
 * Decorative WebGL sphere pinned to the viewport behind the page content.
 * Rendering is paused once it has faded out and frozen to a single frame when
 * the user prefers reduced motion.
 */
export default function HeroSphere({ opacity }: HeroSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // The sphere is decorative: if WebGL is unavailable, the hero still works.
    let sphereScene: SphereScene;
    try {
      sphereScene = createSphereScene(canvas);
    } catch {
      return;
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      sphereScene.resize(width, height);
    });
    resizeObserver.observe(container);

    // The container is fixed to the viewport, so it never leaves the screen:
    // the animation loop only runs while the sphere is actually visible.
    const syncPlayback = (currentOpacity: number) => {
      if (!reduceMotion && currentOpacity > MIN_VISIBLE_OPACITY) {
        sphereScene.start();
      } else {
        sphereScene.stop();
      }
    };
    syncPlayback(opacity.get());
    const unsubscribeOpacity = opacity.on("change", syncPlayback);

    return () => {
      resizeObserver.disconnect();
      unsubscribeOpacity();
      sphereScene.dispose();
    };
  }, [opacity, reduceMotion]);

  return (
    <motion.div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed -z-10 left-1/2 top-[190px] aspect-square w-[min(90vw,900px)] -translate-x-1/2 lg:top-[55px]"
      style={{
        opacity,
        maskImage: edgeFadeMask,
        WebkitMaskImage: edgeFadeMask,
      }}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </motion.div>
  );
}
