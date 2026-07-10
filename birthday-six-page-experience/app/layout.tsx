import type { Metadata, Viewport } from "next";
import { SITE_CONTENT } from "@/content/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little World for You",
  description: "A private six-page birthday keepsake.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071923",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="siteFooter">{SITE_CONTENT.footerText}</footer>
      </body>
    </html>
  );
}
