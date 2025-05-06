import "@/assets/styles/tailwind.css";

import { fontRedHatDisplay } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Arda Eker - Order summary component",
  description: "A mobile-friendly order summary card with SEO setup.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: [
    "Arda Eker",
    "Frontend Mentor",
    "Order summary component",
    "Order summary component solution",
    "Order summary component challenge",
  ],
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={`${fontRedHatDisplay.className} antialiased`}>{children}</body>
    </html>
  );
}
