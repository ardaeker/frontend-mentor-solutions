import { Fraunces, Montserrat } from "next/font/google";

export const fontFraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-fraunces",
});

export const fontMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-montserrat",
});
