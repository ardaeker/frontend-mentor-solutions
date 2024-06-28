import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import opengraphImage from "@/assets/images/avatar-jessica.jpeg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Links Profile",
  description:
    "This is a solution to the Social Links Profile challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge"],
  openGraph: {
    url: "#",
    type: "profile",
    title: "Jessica Randall",
    description: "Front-end developer and avid reader.",
    images: [
      {
        url: opengraphImage.src,
        alt: "Jessica Randall",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
