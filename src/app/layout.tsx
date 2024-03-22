import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const Space = Space_Mono({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Power Struggle",
  description: "Politica Global",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Space.className} antialiased dark:dark`}>{children}</body>
    </html>
  );
}
