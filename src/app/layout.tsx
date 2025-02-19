import { Macondo, Raleway } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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

// const geistSans = Geist({

//   variable: "--font-geist-sans",

//   subsets: ["latin"],

// });

// const geistMono = Geist_Mono({

//   variable: "--font-geist-mono",

//   subsets: ["latin"],

// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="icon" content="/heart.ico" />
        <title>My Page Title</title>
      </Head>
      <body className={raleway.className}>
        <nav className="flex-nowrap fixed top-0 z-10 w-full">
          <div className="mx-aute max-w-7x1 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div>
                <a href="#" className={macondo.className}>
                  Yogiswara Adinugraha Pramudita
                </a>
              </div>
              <ul className="flex flex-collist-none align-middle">
                <li className="mr-4">
                  <a href="#">About</a>
                </li>
                <li className="mr-4">
                  <a href="#">Projects</a>
                </li>
                <li className="mr-4">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
