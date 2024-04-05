import type { Metadata } from "next";
import "./globals.css";
import { body_font } from "@/functions/fonts";

export const metadata: Metadata = {
  title: "GREENMIND",
  description: "E-Commerce Plant Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={body_font.variable}>{children}</body>
    </html>
  );
}
