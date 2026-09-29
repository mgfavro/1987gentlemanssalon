import type { SVGProps } from "react";
import type { Service } from "@/lib/site";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ScissorsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8.1 7.7 20 18M8.1 16.3 20 6M9 12l3-1.7" />
    </svg>
  );
}

export function RazorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 15c3.5 0 8.5-2 12-5.5L21 3l-2.5 8C15 14.5 9 16 5 16Z" />
      <path d="M5 16v3a2 2 0 0 0 2 2h1" />
    </svg>
  );
}

export function BeardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4v5a7 7 0 0 0 14 0V4" />
      <path d="M8.5 9.5c1 1 1.8 1.4 3.5 1.4s2.5-.4 3.5-1.4" />
      <path d="M9 4v2M15 4v2" />
    </svg>
  );
}

export function ClipperIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 4h8v3H3zM4 7v3h6V7" />
      <path d="M11 6h3l6-2v6l-6-2h-3" />
      <path d="M6 10v5a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-5" />
    </svg>
  );
}

export function KidIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 12a6 6 0 0 0-1 3.3M18 12a6 6 0 0 1 1 3.3" />
      <path d="M8 6c1.5-2 6.5-2 8 0" />
      <path d="M12 12v9M8.5 21h7" />
    </svg>
  );
}

export function BrushIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3h6l-1 6H10z" />
      <path d="M8.5 9h7l-.6 3.2a4 4 0 0 1-7.8 0z" />
      <path d="M12 12.4V21" />
    </svg>
  );
}

const map: Record<Service["icon"], (p: IconProps) => React.JSX.Element> = {
  scissors: ScissorsIcon,
  razor: RazorIcon,
  beard: BeardIcon,
  clipper: ClipperIcon,
  kid: KidIcon,
  brush: BrushIcon,
};

export function ServiceIcon({
  name,
  ...props
}: { name: Service["icon"] } & IconProps) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}

export function PoleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="4" width="8" height="16" rx="4" />
      <path d="M9 8l6 3M9 12l6 3M9 16l6 3" />
      <path d="M7 4h10M7 20h10" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h3l1.5 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.5V21a1 1 0 0 1-1 1A17 17 0 0 1 5 5a1 1 0 0 1 1-2Z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 5.9 6.6.9-4.8 4.6 1.1 6.5L12 17.9 6.2 20.9l1.1-6.5L2.5 9.8l6.6-.9z" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.5 7C6.5 8 5 10.3 5 13.5V18h5v-5H7.7c.2-1.7 1-2.7 2.8-3.2zM19 7c-3 1-4.5 3.3-4.5 6.5V18h5v-5h-2.3c.2-1.7 1-2.7 2.8-3.2z" />
    </svg>
  );
}
