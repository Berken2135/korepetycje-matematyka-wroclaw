/** Skleja klasy CSS, pomijając wartości puste/false. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Zamienia listę na frazę z polskim spójnikiem: „a, b i c”. */
export function joinWithConjunction(items: readonly string[], conjunction = "i"): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0] as string;
  const head = items.slice(0, -1).join(", ");
  return `${head} ${conjunction} ${items[items.length - 1]}`;
}
