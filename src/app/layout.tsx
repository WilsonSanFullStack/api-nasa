import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "./components/tools/ThemeToggle";

const Space = Space_Mono({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Api Nasa",
  description: "pagina para mostrar imagenes y datos de la nasa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Space.className} antialiased dark:dark`}>
      <nav className="px-10 bg-slate-500 fixed top-0 min-w-full font-bold">
        <ul className="flex list-none justify-between items-center h-9">
          <li className="inline-block items-center">
            <Link href="/">Home</Link>
          </li>
          <li className="inline-block items-center">
            <Link href="/objects">Objects</Link>
          </li>
          <li className="inline-block items-center">
            <Link href="/image">Image</Link>
          </li>
          <li className="inline-block items-center">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
      {children}</body>
    </html>
  );
}
