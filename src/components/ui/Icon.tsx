import type { ReactNode, SVGProps } from "react";

/**
 * Mały, lokalny zestaw ikon (~24 sztuki) zamiast biblioteki.
 * Powód: brak dodatkowej zależności i zerowy JavaScript na kliencie —
 * ikony renderują się na serwerze jako czysty SVG.
 */

const paths: Record<string, ReactNode> = {
  check: <path d="M20 6 9 17l-5-5" />,
  "arrow-right": (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  "chevron-right": <path d="m9 6 6 6-6 6" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.2 1.9" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M9 21h6" />
      <path d="M12 17v4" />
    </>
  ),
  wallet: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19" />
      <path d="M6.5 14.5h3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2l7.5 2.8v5.6c0 4.7-3.2 7.7-7.5 8.6-4.3-.9-7.5-3.9-7.5-8.6V6z" />
      <path d="m9.2 12 2 2 3.6-3.6" />
    </>
  ),
  star: (
    <path d="m12 3.4 2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.9z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M3 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16.5 5.4a3.5 3.5 0 0 1 0 5.2" />
      <path d="M18.4 15.4A6.5 6.5 0 0 1 21 20" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 12a8 8 0 0 1-8 8H8.8L4 22.5l1.3-4.2A8 8 0 1 1 20.5 12Z" />
      <path d="M9 11.5h7" />
      <path d="M9 8.5h4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3.5 10h17" />
      <path d="M8 14h3" />
    </>
  ),
  edit: (
    <>
      <path d="M12 20h8" />
      <path d="M16.5 4.5a2.1 2.1 0 0 1 3 3L8.5 18.5 4 20l1.5-4.5z" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7.5 8.5 5.5 8.5-5.5" />
    </>
  ),
  phone: (
    <path d="M6.2 3.5h3.1l1.5 3.9-2 1.4a12.4 12.4 0 0 0 6.4 6.4l1.4-2 3.9 1.5v3.1a1.8 1.8 0 0 1-2 1.8A16.5 16.5 0 0 1 4.4 5.5a1.8 1.8 0 0 1 1.8-2Z" />
  ),
  "map-pin": (
    <>
      <path d="M12 21.2s7-6.3 7-11.2a7 7 0 1 0-14 0c0 4.9 7 11.2 7 11.2Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  "graduation-cap": (
    <>
      <path d="M2.5 8.8 12 4.2l9.5 4.6L12 13.4z" />
      <path d="M6.5 11v5.4c0 1.5 2.5 2.8 5.5 2.8s5.5-1.3 5.5-2.8V11" />
      <path d="M21.5 8.8v5" />
    </>
  ),
  "book-open": (
    <>
      <path d="M12 6.6C10.4 5.1 7.9 4.6 4 4.6v12.8c3.9 0 6.4.5 8 2 1.6-1.5 4.1-2 8-2V4.6c-3.9 0-6.4.5-8 2Z" />
      <path d="M12 6.6v12.8" />
    </>
  ),
  "trending-up": (
    <>
      <path d="m3.5 17 6-6 4 4 7-7" />
      <path d="M16.5 8h4v4" />
    </>
  ),
  sparkles: (
    <>
      <path d="m11 3.5 1.7 4.3 4.3 1.7-4.3 1.7L11 15.5 9.3 11.2 5 9.5l4.3-1.7z" />
      <path d="m18 15 .8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18.5h6" />
      <path d="M10 21.5h4" />
      <path d="M12 2.5a6.5 6.5 0 0 0-3.7 11.8v2.2h7.4v-2.2A6.5 6.5 0 0 0 12 2.5Z" />
    </>
  ),
  sigma: <path d="M6 4h11l-6.5 8 6.5 8H6" />,
  atom: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 4.2c4.3-1.6 7.6-1 8.4.4.8 1.4-1 4.2-4.6 6.9-3.6 2.7-7.1 4-8.4 3.2" />
      <path d="M12 19.8c-4.3 1.6-7.6 1-8.4-.4-.8-1.4 1-4.2 4.6-6.9 3.6-2.7 7.1-4 8.4-3.2" />
    </>
  ),
  language: (
    <>
      <path d="M3.5 6h8" />
      <path d="M7.5 4v2" />
      <path d="M9.8 6c0 3.6-2.6 6.6-6.3 7.6" />
      <path d="M5 10.4c.9 2 2.7 3.5 5 4.1" />
      <path d="m12.5 20 3.8-9 3.8 9" />
      <path d="M13.9 16.8h4.8" />
    </>
  ),
  "file-text": (
    <>
      <path d="M13.5 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z" />
      <path d="M13.5 3.5V9H19" />
      <path d="M9 13.5h6" />
      <path d="M9 17h4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <path d="M12 7.8h.01" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4 2.8 20h18.4z" />
      <path d="M12 9.5v4.5" />
      <path d="M12 17.2h.01" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export const iconNames = Object.keys(paths) as IconName[];

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  /** Rozmiar w pikselach (kwadrat). */
  size?: number;
  /** Ustaw `title`, jeśli ikona przenosi znaczenie samodzielnie. */
  title?: string;
};

export function Icon({ name, size = 24, title, className, ...props }: IconProps) {
  const isDecorative = !title;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={isDecorative ? true : undefined}
      role={isDecorative ? undefined : "img"}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
