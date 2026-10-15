function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

interface ModelAvatarProps {
  name: string;
}

export default function ModelAvatar({ name }: ModelAvatarProps) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2">
      <span
        className="text-[12px] font-bold leading-none text-gray-12"
        aria-hidden
      >
        {getInitials(name)}
      </span>
    </div>
  );
}
