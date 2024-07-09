import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "Four Card Feature Section",
  description:
    "This is a solution to the Four Card Feature Section challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge", "four card feature section", "arda eker"],
  openGraph: {
    url: "https://fm-2024-four-card-feature-section.vercel.app",
    type: "website",
    title: "Four Card Feature Section",
    description: "A simple four card feature section built with Next.js and Tailwind CSS. Coded by Arda Eker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${font.className}`}>{children}</body>
    </html>
  );
}
