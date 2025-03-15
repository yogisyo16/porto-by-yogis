"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="grid items-center justify-items-center min-h-screen md:items-center sm:items-center">
      <main className="flex flex-col gap-4 row-start-1 md:items-center sm:items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-center">
            Yogiswara Adinugraha Pramudita
          </h1>
          <h2 className="text-2xl text-gray-400 text-center">
            Full-Stack Developer
          </h2>
          <div className="flex flex-col mt-12 gap-4">
            <h3 className="text-5xl text-center">Hello!</h3>
            <p className="flex-wrap mx-10 my-10 text-center md:text-center sm:text-center">
              my contact
            </p>
          </div>
        </div>
      </main>
      <footer className="flex flex-wrap row-start-2 mt-0 mb-10 items-center">
        <p>Copyright &copy; 2025 Yogiswara Adinugraha Pramudita</p>
      </footer>
    </div>
  );
}
