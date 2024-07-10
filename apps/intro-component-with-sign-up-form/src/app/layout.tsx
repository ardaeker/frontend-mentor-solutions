import "@/styles/tailwind.css";
import { cn } from "@ardaeker/utilities";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Intro Component with Sign-up Form",
  description:
    "This is a solution to the Intro Component with Sign-up Form challenge on Frontend Mentor. It's a simple landing page with a sign-up form. Built with Next.js and Tailwind CSS. Challenge by Frontend Mentor coded by @ardaeker.",
  keywords: ["next.js", "tailwindcss", "frontend-mentor", "intro-component", "sign-up-form", "react", "arda eker"],
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  openGraph: {
    url: "https://fm-2024-intro-component-with-signup-form.vercel.app",
    type: "website",
    title: "Intro Component with Sign-up Form",
    description:
      "This is a solution to the Intro Component with Sign-up Form challenge on Frontend Mentor. Built with Next.js and Tailwind CSS. Challenge by Frontend Mentor coded by @ardaeker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", font.className)}>{children}</body>
    </html>
  );
}
