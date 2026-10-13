"use client";

interface MenuToggleButtonProps {
  open: boolean;
  onToggle: () => void;
  controlsId: string;
}

const lineBaseClasses =
  "absolute left-0 top-1/2 -mt-px h-0.5 w-full bg-gray-5 transition-[translate,rotate] duration-300 ease-out";

/**
 * Two-line button that morphs into an X when the mobile menu is open.
 */
export default function MenuToggleButton({
  open,
  onToggle,
  controlsId,
}: MenuToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controlsId}
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      className="pointer-events-auto flex h-full w-auto items-center justify-center"
    >
      <span className="relative block h-2.5 w-6">
        <span
          aria-hidden="true"
          className={`${lineBaseClasses} ${
            open ? "translate-y-0 rotate-45" : "-translate-y-1"
          }`}
        />
        <span
          aria-hidden="true"
          className={`${lineBaseClasses} ${
            open ? "translate-y-0 -rotate-45" : "translate-y-1"
          }`}
        />
      </span>
    </button>
  );
}
