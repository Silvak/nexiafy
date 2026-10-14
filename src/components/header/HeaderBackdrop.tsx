interface HeaderBackdropProps {
  visible: boolean;
  /** Bottom divider that fades out towards the edges. */
  showDivider?: boolean;
}

/**
 * Frosted-glass background for the header bar, using the page background
 * color.
 */
export default function HeaderBackdrop({
  visible,
  showDivider = true,
}: HeaderBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 -z-10 bg-background/90 backdrop-blur-md backdrop-saturate-150 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-opacity duration-300 ${
          showDivider ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
