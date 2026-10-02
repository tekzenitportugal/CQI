type NavChevronProps = {
  active?: boolean;
  className?: string;
};

/** Figma ICONS 14×14 — points up when active, down when inactive (via CSS scaleY). */
export function NavChevron({ active = false, className }: NavChevronProps) {
  return (
    <svg
      className={className}
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10.833 9.43327L11.4453 8.82096L11.5166 8.75065L7 4.23405L2.4834 8.75065L2.55469 8.82096L3.16699 9.43327L3.23731 9.50456L7 5.74186L10.7627 9.50456L10.833 9.43327Z"
        fill={active ? '#0044FF' : '#4D4D4D'}
        stroke={active ? '#0044FF' : '#4D4D4D'}
        strokeWidth={0.2}
      />
    </svg>
  );
}
