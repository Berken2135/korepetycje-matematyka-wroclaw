import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";
import { activeTutors } from "@/content/tutors";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl(routes.home), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl(routes.pricing), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl(routes.booking), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl(routes.faq), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl(routes.about), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl(routes.contact), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const tutorRoutes: MetadataRoute.Sitemap = activeTutors.map((tutor) => ({
    url: absoluteUrl(routes.tutor(tutor.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...tutorRoutes];
}
