import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Equilibrium #3429",
  description:
    "This is a solution to the NFT Preview Card Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge", "nft", "preview", "card", "arda eker"],
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  openGraph: {
    url: "https://fm-2024-nft-preview-card-component.vercel.app",
    type: "website",
    title: "Equilibrium #3429",
    description:
      "Our Equilibrium collection promotes balance and calm. Each piece is designed to bring a sense of tranquility to your home.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-outfit antialiased ${outfit.variable}`}>{children}</body>
    </html>
  );
}
