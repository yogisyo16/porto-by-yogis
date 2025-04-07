"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
return (
  <div className="grid items-center justify-items-center min-h-screen">
    <main className="flex flex-col gap-4 row-start-1 md:items-center sm:items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center">Projects</h1>
        <div className="flex flex-col gap-8 p-4 items-start border-neutral-950 border-2 rounded-badge shadow-xl shadow-slate-800 bg-slate-500">
          <h1 className="text-3xl text-start sm:text-center md:text-center">
            Sistem PPDB SMP Maria Immaculata
          </h1>
          <Image
            src="/images/Pro Display XDR.png"
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="LinkedIn Yogiswara"
          />
          <div className="flex">
            <p className="w-12 md:w-56 lg:w-1/2 xl:w-1/3 break-words flex-1">
              My latest project for my final project in college. this project was inteded to help a.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Link href="https://github.com/yogisyo16" target="_blank">
          <motion.div
            className="hover:bg-slate-500 rounded-xl"
            whileHover={{
              scale: 1.3,
            }}
          >
            <Image
              src="/icons/github.png"
              width={35}
              height={35}
              alt="GitHub Yogiswara"
            />
          </motion.div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/yogiswara-adinugraha/"
          target="_blank"
        >
          <motion.div
            className="hover:bg-slate-500 rounded-xl"
            whileHover={{
              scale: 1.3,
            }}
          >
            <Image
              src="/icons/linkedin.png"
              width={35}
              height={35}
              alt="LinkedIn Yogiswara"
            />
          </motion.div>
        </Link>
        <Link href="https://www.instagram.com/yogiss_1010/" target="_blank">
          <motion.div
            className="hover:bg-slate-500 rounded-xl"
            whileHover={{
              scale: 1.3,
            }}
          >
            <Image
              src="/icons/instagram.png"
              width={35}
              height={35}
              alt="Instagram Yogiswara"
            />
          </motion.div>
        </Link>
      </div>
    </main>
    <footer className="flex flex-wrap row-start-2 mt-0 mb-10 items-center">
      <p>Copyright &copy; 2025 Yogiswara Adinugraha Pramudita</p>
    </footer>
  </div>
);
}
