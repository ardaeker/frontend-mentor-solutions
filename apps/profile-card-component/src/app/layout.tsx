import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";

const font = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profile Card Component",
  description:
    "This is a solution to the Profile Card Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge", "profile card component", "arda eker"],
  openGraph: {
    url: "https://fm-2024-profile-card-component.vercel.app",
    type: "website",
    title: "Profile Card Component",
    description: "A simple profile card component built with Next.js and Tailwind CSS. Coded by Arda Eker.",
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
