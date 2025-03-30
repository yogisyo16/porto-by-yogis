import { Macondo, Raleway } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import classnames from "classnames";
import Link from "next/link";
import Transition from "../../public/animation/transition";

export const viewport: Viewport = {
  themeColor: "black",
};

const macondo = Macondo({
  variable: "--font-macondo",

  subsets: ["latin"],

  weight: "400",
});

const raleway = Raleway({
  variable: "--font-raleway",

  subsets: ["latin"],

  weight: "400",
});

export const metadata = {
  title : "PortGis",
  description : "programmer",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={(classnames(raleway.className), "bg-indigo-900/70 glass")}
      >
        <div className="flex flex-col min-w-screen min-h-screen">
          <nav className="navbar mb-20 md:items-start">
            <div className="flex-1 mx-auto p-4">
              <Link
                href="/"
                className={
                  (classnames(macondo.className),
                  "bg-gradient-to-r from-slate-600 via-cyan-700 to-purple-600 text-transparent bg-clip-text text-4xl")
                }
              >
                <img
                  src="/images/logo-transparent.png"
                  alt=""
                  className="w-16 md:w-32 bg-white rounded-full"
                />
              </Link>
            </div>
            <div className="flex-none md:flex md:flex-col">
              <details className="md:hidden">
                <summary className="btn m-2">Menu</summary>
                <ul className="bg-base-100 rounded-2xl p-2 items-center">
                  <li className="mb-2">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li className="">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </details>
              <ul className="hidden menu menu-dropdown md:flex md:flex-row md:space-x-8 md:m-6 ">
                <li className="md:mr-2">
                  <Link href="/about">About</Link>
                </li>
                <li className="md:mr-4">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="md:mr-4">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Transition>{children}</Transition>
        </div>
      </body>
    </html>
  );
}
