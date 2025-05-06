import "@/assets/styles/tailwind.css";

import { fontOutfit } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Arda Eker - QR Code Component",
  description: "SEO-friendly QR code component with semantic markup and responsive design.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: [
    "Arda Eker",
    "Frontend Mentor",
    "QR Code Component",
    "QR Code Component solution",
    "QR Code Component challenge",
  ],
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={`${fontOutfit.variable} font-outfit antialiased`}>{children}</body>
    </html>
  );
}
