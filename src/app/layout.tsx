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
    <html lang="en">
      <body
        className={(classnames(raleway.className), "bg-indigo-900/70 glass")}
      >
        <nav className="navbar-center">
          <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-4">
            <Link
              href="/"
              className={
                (classnames(macondo.className),
                "bg-gradient-to-r from-slate-600 via-cyan-700 to-purple-600 text-transparent bg-clip-text text-4xl")
              }
            >
              PortGis
            </Link>
            <button
              data-collapse-toggle="navbar-portgis"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-portgis"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-portgis"
            >
              <ul className="menu menu-horizontal md:flex-row md:space-x-8 rtl:space-x-reverse">
                <li className="mr-2">
                  <Link href="/about">About</Link>
                </li>
                <li className="mr-4">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="mr-4">
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
