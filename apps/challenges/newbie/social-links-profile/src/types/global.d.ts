import type { Metadata as NextMetadata } from "next";

declare global {
  type Metadata = NextMetadata;

  type RootLayout = Readonly<{
    children: React.ReactNode;
  }>;
}
