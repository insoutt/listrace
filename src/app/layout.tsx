import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { poppins } from "./fonts";



export const metadata: Metadata = {
  title: "Zenith Application",
  description: "Zenith application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
