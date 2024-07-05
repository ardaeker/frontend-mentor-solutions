import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Karla } from "next/font/google";

const font = Karla({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Single Price Grid Component",
  description:
    "This is a solution to the Single Price Grid Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge", "single price grid component", "arda eker"],
  openGraph: {
    url: "https://fm-2024-single-price-grid-component.vercel.app",
    type: "website",
    title: "Single Price Grid Component",
    description:
      "This is a solution to the Single Price Grid Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
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
