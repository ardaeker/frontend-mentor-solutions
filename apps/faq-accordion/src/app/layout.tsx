import "@/styles/tailwind.css";
import { cn } from "@ardaeker/utilities";

import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FAQ Accordion",
  description:
    "This is a solution to the FAQ Accordion challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge", "faq", "accordion"],
  openGraph: {
    url: "https://fm-2024-faq-accordion.vercel.app",
    type: "website",
    title: "FAQ Accordion",
    description:
      "This is a solution to the FAQ Accordion challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", workSans.className)}>{children}</body>
    </html>
  );
}
