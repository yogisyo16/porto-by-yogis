"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen md:items-start sm:items-start">
      <main className="flex flex-col gap-4 row-start-1 md:items-center sm:items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-center">
            Yogiswara Adinugraha Pramudita
          </h1>
          <h2 className="text-2xl text-gray-400 text-center">
            Full-Stack Developer
          </h2>
          <div className="flex flex-col mt-12 gap-4">
            <h3 className="text-5xl text-center">Hello!</h3>
            <p className="flex-wrap mx-96 my-10 md:text-start sm:text-start">
              Whatssssuppppp!!! Hello everyone! My name is Yogiswara Adinugraha
              Pramudita and you can call me Yoga, Yogis, and Yogi. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. A, officiis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Molestias
              expedita saepe eveniet libero aliquam minus dignissimos assumenda
              illum aspernatur debitis? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Facilis repellat blanditiis quasi nostrum nemo.
              Perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Molestias blanditiis optio repudiandae iusto id deserunt?
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
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
      </main>
      <footer className="flex flex-wrap row-start-2 mt-0 mb-10 items-center">
        <p>Copyright &copy; 2025 Yogiswara Adinugraha Pramudita</p>
      </footer>
    </div>
  );
}
