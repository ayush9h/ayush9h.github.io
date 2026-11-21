import { stackIcons, type StackIconName } from "./stack-icons";

// The extracted SVGs carry only a viewBox, so the wrapper sets the size
// and the child svg is stretched to fill it.
export default function StackIcon({
  name,
  className = "",
}: {
  name: StackIconName;
  className?: string;
}) {
  const svg = stackIcons[name];
  if (!svg) return null;

  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 [&>svg]:w-full [&>svg]:h-full ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
