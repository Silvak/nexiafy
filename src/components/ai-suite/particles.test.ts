import { describe, expect, it } from "vitest";

import {
  advanceParticles,
  createParticles,
  type Particle,
} from "./particles";

describe("createParticles", () => {
  it("returns empty array for invalid bounds or count", () => {
    expect(createParticles(10, { width: 0, height: 100 })).toEqual([]);
    expect(createParticles(0, { width: 100, height: 100 })).toEqual([]);
  });

  it("creates the requested number of particles within bounds", () => {
    let seed = 0;
    const random = () => {
      seed += 0.17;
      return seed % 1;
    };

    const particles = createParticles(5, { width: 200, height: 100 }, random);
    expect(particles).toHaveLength(5);
    particles.forEach((p) => {
      expect(p.x).toBeGreaterThanOrEqual(0);
      expect(p.x).toBeLessThanOrEqual(200);
      expect(p.y).toBeGreaterThanOrEqual(0);
      expect(p.y).toBeLessThanOrEqual(100);
    });
  });
});

describe("advanceParticles", () => {
  it("moves particles and reflects on edges", () => {
    const initial: Particle[] = [
      {
        x: 199,
        y: 50,
        vx: 2,
        vy: 0,
        radius: 2,
        alpha: 0.5,
      },
    ];

    const next = advanceParticles(initial, { width: 200, height: 100 }, 16);
    expect(next[0].vx).toBeLessThan(0);
    expect(next[0].x).toBeLessThanOrEqual(200);
  });
});
