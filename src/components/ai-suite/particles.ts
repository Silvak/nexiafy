export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export interface ParticleBounds {
  width: number;
  height: number;
}

export function createParticles(
  count: number,
  bounds: ParticleBounds,
  random: () => number = Math.random,
): Particle[] {
  const { width, height } = bounds;
  if (width <= 0 || height <= 0 || count <= 0) {
    return [];
  }

  return Array.from({ length: count }, () => ({
    x: random() * width,
    y: random() * height,
    vx: (random() - 0.5) * 0.35,
    vy: (random() - 0.5) * 0.35,
    radius: 1 + random() * 2.5,
    alpha: 0.15 + random() * 0.45,
  }));
}

export function advanceParticles(
  particles: Particle[],
  bounds: ParticleBounds,
  deltaMs: number,
): Particle[] {
  const { width, height } = bounds;
  if (width <= 0 || height <= 0) {
    return particles;
  }

  const step = Math.min(deltaMs / 16, 2);

  return particles.map((particle) => {
    let x = particle.x + particle.vx * step;
    let y = particle.y + particle.vy * step;
    let vx = particle.vx;
    let vy = particle.vy;

    if (x <= 0 || x >= width) {
      vx *= -1;
      x = Math.max(0, Math.min(width, x));
    }
    if (y <= 0 || y >= height) {
      vy *= -1;
      y = Math.max(0, Math.min(height, y));
    }

    return { ...particle, x, y, vx, vy };
  });
}
