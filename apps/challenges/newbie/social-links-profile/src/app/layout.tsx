import "@/assets/styles/tailwind.css";

import { fontInter } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Arda Eker - Social links profile",
  description: "A responsive social profile card with SEO optimization and thorough testing.",
  authors: [{ name: "Arda Eker", url: "https://github.com/ardaeker" }],
  keywords: [
    "Arda Eker",
    "Frontend Mentor",
    "Social links profile",
    "Social links profile solution",
    "Social links profile challenge",
  ],
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={`${fontInter.className} antialiased`}>{children}</body>
    </html>
  );
}
