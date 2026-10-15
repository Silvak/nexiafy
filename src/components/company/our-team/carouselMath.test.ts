import { describe, expect, it } from "vitest";

import { clampIndex, getMaxIndex } from "./carouselMath";

describe("getMaxIndex", () => {
  it("returns 0 when total fits in visible count", () => {
    expect(getMaxIndex(3, 4)).toBe(0);
    expect(getMaxIndex(4, 4)).toBe(0);
  });

  it("returns total minus visible when list is longer", () => {
    expect(getMaxIndex(10, 4)).toBe(6);
    expect(getMaxIndex(6, 3)).toBe(3);
  });

  it("returns 0 for invalid counts", () => {
    expect(getMaxIndex(0, 4)).toBe(0);
    expect(getMaxIndex(5, 0)).toBe(0);
  });
});

describe("clampIndex", () => {
  it("clamps negative values to 0", () => {
    expect(clampIndex(-3, 8, 4)).toBe(0);
  });

  it("clamps values above max index", () => {
    expect(clampIndex(99, 8, 4)).toBe(4);
  });

  it("preserves valid indices", () => {
    expect(clampIndex(2, 8, 4)).toBe(2);
  });

  it("handles list shorter than visible slots", () => {
    expect(clampIndex(5, 2, 4)).toBe(0);
  });
});
