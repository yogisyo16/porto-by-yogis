"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center gap-4">
          Yogiswara Adinugraha Pramudita
        </h1>
        <h2 className="text-2xl text-gray-400 text-center">
          Full-Stack Developer
        </h2>
        <div className="flex flex-col mt-12 gap-4">
          <h3 className="text-5xl text-center">Hello!</h3>
          <p className="flex-wrap mx-10 my-10 text-center md:text-center sm:text-center">
            Whatssssuppppp!!! Hello everyone! My name is Yogiswara Adinugraha
            Pramudita and you can call me Yoga, Yogis, and Yogi. Whatever you want. (hehe)
            <br />I have been so passionate on code since my first year in
            college.
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center md:items-center">
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
{/* umang */}
          </Link>
          <Link
            href="https://www.linkedin.com/in/yogiswara-adinugraha/"
            target="_blank"
          >
            <motion.div
              className="hover:bg-slate-500 rounded-xl"
              whileTap={{ scale: 1.6 }}
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
      </div>
      <footer className="flex flex-col mt-36 pt-0 mb-10 ml-4 items-center text-center md:mt-56 md:pt-16">
        <p>Copyright &copy; 2025 Yogiswara Adinugraha Pramudita</p>
      </footer>
    </main>
  );
}
