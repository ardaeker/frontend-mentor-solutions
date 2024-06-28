import "@/styles/tailwind.css";
import { cn } from "@ardaeker/utilities";

import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";

import opengraphImage from "@/assets/images/image-product-desktop.jpg";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Gabrielle Essence Eau De Parfum",
  description:
    "This is a solution to the Product Preview Card challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["nextjs", "tailwindcss", "frontend-mentor", "challenge", "perfume", "product", "card", "preview"],
  openGraph: {
    url: "https://fm-2024-product-preview-card-component.vercel.app",
    type: "website",
    title: "Gabrielle Essence Eau De Parfum",
    description:
      "A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANNEL.",
    images: [
      {
        url: opengraphImage.src,
        alt: "Gabrielle Chanel Paris perfume bottle placed on a surface with green leaves around it",
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
      <body className={cn("antialiased", fraunces.variable, montserrat.variable)}>{children}</body>
    </html>
  );
}
