import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order Summary Component",
  description:
    "This is a solution to the Order Summary Component challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge", "order", "summary", "component", "arda eker"],
  openGraph: {
    url: "https://fm-2024-order-summary-component.vercel.app",
    type: "website",
    title: "Order Summary Component",
    description: "A simple order summary component built with Next.js and Tailwind CSS. Coded by Arda Eker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${redHatDisplay.className}`}>{children}</body>
    </html>
  );
}
