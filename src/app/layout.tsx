import type { Metadata } from "next";
import { AnimatedFavicon } from "./components/AnimatedFavicon";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://solutionforge.dev"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  title: "SolutionForge | Websites, outreach & AI systems",
  description:
    "SolutionForge builds business websites, creates thoughtful outreach systems, and automates recurring work for growth and operations teams.",
  keywords: [
    "business website design",
    "website development",
    "business outreach",
    "prospect outreach",
    "AI workflow consulting",
    "AI automation",
    "technical SEO",
    "organic search operations",
    "content operations",
    "measurement systems",
    "SolutionForge",
  ],
  openGraph: {
    title: "SolutionForge | Websites, outreach & AI systems",
    description:
      "Business websites, thoughtful outreach systems, and practical automation designed around real operations.",
    type: "website",
    url: "/",
    siteName: "SolutionForge",
  },
  twitter: {
    card: "summary",
    title: "SolutionForge | Websites, outreach & AI systems",
    description:
      "Business websites, thoughtful outreach systems, and practical automation designed around real operations.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnimatedFavicon />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
