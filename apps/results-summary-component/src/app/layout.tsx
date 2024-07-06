import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

const font = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });

export const metadata: Metadata = {
  title: "Result Summary Component",
  description:
    "This is a solution to the Result Summary Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge", "results summary component", "arda eker"],
  openGraph: {
    url: "https://fm-2024-results-summary-component.vercel.app",
    type: "website",
    title: "Result Summary Component",
    description:
      "This is a solution to the Result Summary Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-hanken antialiased ${font.variable}`}>{children}</body>
    </html>
  );
}
