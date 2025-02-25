"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="grid items-center justify-items-center min-h-screen">
            <main className="flex flex-col md:items-center sm:items-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-row items-center">
                        <h1 className="text-5xl">About</h1>
                        <h1 className="text-4xl">Me</h1>
                    </div>
                    <div className="flex align-center">
                        <motion.div 
                            className="card card-bordered bg-slate-600 w-96 shadow-2xl rounded-2xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6 }}
                            >
                                <figure>
                                    <Image src="/images/Yogis1.jpg" width={500} height={500} alt="LinkedIn Yogiswara" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Yogiswara Adinugraha Pramudita</h2>
                                    <p>Mama I'm on website!</p>
                                </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <footer className="flex flex-wrap row-start-2 mt-10 items-center">
                <p>Copyright &copy; 2025 Yogiswara Adinugraha Pramudita</p>
            </footer>
        </div>
    )
}