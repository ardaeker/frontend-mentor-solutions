import "@/styles/tailwind.css";
import { cn } from "@ardaeker/utilities";

import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import opengraphImage from "@/assets/images/image-avatar.webp";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HTML & CSS foundations - Greg Hooper",
  description:
    "This is a solution to the Blog Preview Card challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["next.js", "tailwind css", "frontend mentor", "challenge", "solution", "blog preview card", "html", "css"],
  openGraph: {
    url: "https://fm-2024-blog-preview-card.vercel.app",
    type: "article",
    title: "HTML & CSS foundations - Greg Hooper",
    description: "These languages are the backbone of every website, defining structure, content, and presentation.",
    images: [
      {
        url: opengraphImage.src,
        alt: "Greg Hooper's avatar",
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
      <body className={cn("antialiased", figtree.className)}>{children}</body>
    </html>
  );
}
