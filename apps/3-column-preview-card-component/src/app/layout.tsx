import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Big_Shoulders_Display, Lexend_Deca } from "next/font/google";

const bigShouldersDisplay = Big_Shoulders_Display({ subsets: ["latin"], variable: "--font-big-shoulders" });
const lexendDeca = Lexend_Deca({ subsets: ["latin"], variable: "--font-lexend-deca" });

export const metadata: Metadata = {
  title: "3 Column Preview Card Component",
  description:
    "This is a solution to the 3 Column Preview Card Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge", "3 column preview card component", "arda eker"],
  openGraph: {
    url: "https://fm-2024-3-column-preview-card-component.vercel.app",
    type: "website",
    title: "3 Column Preview Card Component",
    description:
      "A solution to the 3 Column Preview Card Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${bigShouldersDisplay.variable} ${lexendDeca.variable}`}>{children}</body>
    </html>
  );
}
