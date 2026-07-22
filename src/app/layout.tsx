import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://solutionforge.dev"),
  title: "SolutionForge | Practical AI systems for growth teams",
  description:
    "SolutionForge designs and implements AI workflows, technical SEO infrastructure, and measurement systems for teams replacing manual, disconnected work.",
  keywords: [
    "AI workflow consulting",
    "AI automation",
    "technical SEO",
    "organic search operations",
    "content operations",
    "measurement systems",
    "SolutionForge",
  ],
  openGraph: {
    title: "SolutionForge | Practical AI systems for growth teams",
    description:
      "AI workflows, SEO and content operations, and decision systems designed around real operations.",
    type: "website",
    url: "/",
    siteName: "SolutionForge",
  },
  twitter: {
    card: "summary",
    title: "SolutionForge | Practical AI systems for growth teams",
    description:
      "AI workflows, SEO and content operations, and decision systems designed around real operations.",
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
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
