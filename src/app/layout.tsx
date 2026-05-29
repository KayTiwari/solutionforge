import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolutionForge | AI • SEO • Strategy • Results",
  description:
    "SolutionForge is a tech and AI consulting firm helping businesses grow through intelligent AI strategy, data-driven SEO, and measurable results.",
  keywords: [
    "AI consulting",
    "SEO strategy",
    "tech consulting",
    "artificial intelligence",
    "digital strategy",
    "SolutionForge",
  ],
  openGraph: {
    title: "SolutionForge | AI • SEO • Strategy • Results",
    description:
      "Helping businesses grow through intelligent AI strategy, data-driven SEO, and measurable results.",
    type: "website",
    url: "https://solutionforge.dev",
    siteName: "SolutionForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolutionForge | AI • SEO • Strategy • Results",
    description:
      "Helping businesses grow through intelligent AI strategy, data-driven SEO, and measurable results.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
