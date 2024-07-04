import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Inter, Lexend_Deca } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lexendDeca = Lexend_Deca({ subsets: ["latin"], variable: "--font-lexend-deca" });

export const metadata: Metadata = {
  title: "Stats Preview Card Component",
  description:
    "This is a solution to the Stats Preview Card Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge", "arda eker", "stats preview card component"],
  openGraph: {
    url: "https://fm-2024-stats-preview-card-component.vercel.app",
    type: "website",
    title: "Stats Preview Card Component",
    description:
      "A card component that displays statistics about a company's performance. Built with Next.js and Tailwind CSS. Coded by Arda Eker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className} ${lexendDeca.variable}`}>{children}</body>
    </html>
  );
}
