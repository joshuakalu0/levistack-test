import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeviStack - Modern Web Development Stack",
  description:
    "A modern stack for building beautiful, responsive, and performant web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
