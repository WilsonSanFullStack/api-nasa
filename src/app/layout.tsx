// importacion de herramientas
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
// importacion de componentes
import ThemeToggle from "./components/tools/ThemeToggle";
// aplicacion de tipo de letra
const Space = Space_Mono({ subsets: ["latin"], weight: ['400', '700'] });
// titulo de la ventana y descripcion
export const metadata: Metadata = {
  title: "Api Nasa",
  description: "pagina para mostrar imagenes y datos de la nasa",
};
// creacion del componente funcional RootLayout con las props
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // renderizado del RootLayaout
  return (
    <html lang="en">
      <body className={`${Space.className} antialiased dark:dark`}>
        {/* creacion de la navbar */}
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
