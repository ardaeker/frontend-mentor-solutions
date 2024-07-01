import "@/styles/tailwind.css";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "QR Code Component",
  description:
    "This is a solution to the QR Code Component challenge on Frontend Mentor. It's a simple component that displays a QR code. Challenge by Frontend Mentor. Coded by @ardaeker.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: ["react", "typescript", "next", "tailwind", "frontend mentor", "solution", "component", "qr code"],
  openGraph: {
    title: "QR Code Component",
    description:
      "This is a solution to the QR Code Component challenge on Frontend Mentor. It's a simple component that displays a QR code. Challenge by Frontend Mentor. Coded by @ardaeker.",
    type: "website",
    url: "https://fm-2024-qr-code-component.vercel.app",
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
