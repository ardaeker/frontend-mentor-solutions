import "@/assets/styles/tailwind.css";

import { fontFraunces, fontMontserrat } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Arda Eker - Product preview card component",
  description: "A fully tested, SEO-optimized product preview card with mobile-friendly design.",
  authors: {
    name: "Arda Eker",
    url: "https://github.com/ardaeker",
  },
  keywords: [
    "Frontend Mentor",
    "Product preview card component",
    "Product preview card component solution",
    "Product preview card component challenge",
    "Product preview card component challenge solution",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Arda Eker",
  ],
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={`${fontFraunces.variable} ${fontMontserrat.variable} font-montserrat antialiased`}>
        {children}
      </body>
    </html>
  );
}
