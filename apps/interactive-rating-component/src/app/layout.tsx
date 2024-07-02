import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"], variable: "--font-overpass" });

export const metadata: Metadata = {
  title: "Interactive Rating Component",
  description:
    "This is an solution for the Interactive Rating Component challenge on Frontend Mentor. It's a simple rating component that allows users to rate a product. Built with Next.js and Tailwind CSS. Challenge by Frontend Mentor coded by @ardaeker.",
  keywords: ["next.js", "tailwindcss", "frontend-mentor", "rating-component", "interactive-rating", "react"],
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  openGraph: {
    url: "https://fm-2024-interactive-rating-component.vercel.app",
    type: "website",
    title: "Interactive Rating Component",
    description:
      "This is an solution for the Interactive Rating Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Challenge by Frontend Mentor coded by @ardaeker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-overpass antialiased ${overpass.variable}`}>{children}</body>
    </html>
  );
}
