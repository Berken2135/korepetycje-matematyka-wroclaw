import type { Metadata } from "next";
import { absoluteUrl, site } from "@/content/site";
import { getDictionary } from "@/i18n";

const dict = getDictionary();

type PageMetadataInput = {
  /** Krótki tytuł strony — przechodzi przez szablon `%s | Studeo`. */
  title: string;
  description: string;
  path: string;
  /** `true` tylko dla strony głównej — `title` to już gotowy, pełny napis. */
  absoluteTitle?: boolean;
};

/** Spójne metadane (tytuł, opis, canonical, Open Graph, Twitter) dla jednej podstrony. */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : dict.meta.titleTemplate.replace("%s", title);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "pl_PL",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}
