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
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            <li>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-start mb-10 md:text-end">
                                    <time className="font-bold italic">Hello World!</time>
                                    <motion.div 
                                        className="card card-normal bg-slate-600 w-96 shadow-2xl rounded-2xl"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1.6 }}
                                    >
                                        <figure>
                                            <Image src="/images/Yogis1.jpg" width={500} height={500} alt="LinkedIn Yogiswara" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Yogiswara Adinugraha Pramudita</h2>
                                            <h2 className="card-side text-center">Summary</h2>
                                            <p>
                                                I am an adaptable and highly motivated individual who thrives in
                                                new environments and integrates well into diverse teams and
                                                communities. My experience spans web development, system and
                                                application development, iOS development, and game development. As
                                                a programmer, I possess strong logical and abstract thinking
                                                skills, enabling me to analyze and solve complex problems
                                                effectively.
                                            </p>
                                            <p>
                                                I have a proven track record of actively participating in
                                                organizations, progressing from a member to a leadership role.
                                                Known for my cheerful demeanor, persistence, and strong work
                                                ethic, I am committed to delivering high-quality results and
                                                continuously striving to reach my full potential.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end md:mb-10">
                                    <time className="font-bold italic">Kobe!!!</time>
                                    <motion.div 
                                        className="card card-normal bg-slate-600 w-96 shadow-2xl rounded-2xl"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1.6 }}
                                    >
                                        <figure>
                                            <Image src="/images/Yogis2.jpg" width={500} height={500} alt="LinkedIn Yogiswara" />
                                        </figure>
                                        <div className="card-body">
                                            <h1 className="card-title">Hobby</h1>
                                            <p>
                                                I am an adaptable and highly motivated individual who thrives in
                                                new environments and integrates well into diverse teams and
                                                communities. My experience spans web development, system and
                                                application development, iOS development, and game development. As
                                                a programmer, I possess strong logical and abstract thinking
                                                skills, enabling me to analyze and solve complex problems
                                                effectively.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <footer className="flex flex-wrap row-start-2 mt-0 mb-10 items-center">
                <p>Copyright &copy; 2025 Yogiswara Adinugraha Pramudita</p>
            </footer>
        </div>
    )
}