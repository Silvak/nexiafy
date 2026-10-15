export type HeroActionVariant = "primary" | "secondary";

const baseClass =
  "flex h-14 flex-row items-center w-full md:w-fit justify-center gap-3 rounded-full px-6 text-center text-[14px] font-bold leading-[20px] text-white transition-all duration-300 hover:scale-95 hover:opacity-90";

export function heroActionClass(variant: HeroActionVariant): string {
  if (variant === "primary") {
    return `${baseClass} bg-brand-rose-1`;
  }
  return `${baseClass} border border-white/5 bg-gray-9`;
}
