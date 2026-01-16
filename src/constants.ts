export const LANG = "en-US";
export const DATE_FORMAT_OPTIONS = {
  weekday: "short" as const,
  month: "short" as const,
  day: "numeric" as const,
  hour: "numeric" as const,
  minute: "2-digit" as const,
  hour12: true,
} satisfies Intl.DateTimeFormatOptions;
