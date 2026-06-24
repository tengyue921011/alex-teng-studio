import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Teng Studio | Planter & Gardenware Product Design",
  description:
    "Independent portfolio of Alex Teng, exploring planter design, gardenware concepts, matte textures, earthy palettes, and product ideas for indoor and outdoor spaces."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
