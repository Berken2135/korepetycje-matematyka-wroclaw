import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { getDictionary } from "@/i18n";
import { defaultLocale, htmlLang } from "@/i18n/config";
import { buildOrganizationSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["600", "700", "800"],
});

const dict = getDictionary();

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { template: dict.meta.titleTemplate, default: dict.meta.home.title },
  description: dict.meta.home.description,
  applicationName: site.name,
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={htmlLang[defaultLocale]} className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[100] focus-visible:rounded-full focus-visible:bg-brand-600 focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-white"
        >
          {dict.common.skipToContent}
        </a>

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCta />

        <JsonLd data={buildOrganizationSchema()} />
      </body>
    </html>
  );
}
