"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useState } from "react";
// import { useRef } from "react";

export default function About() {

    // const [inView, setInView] = useState(false);
    // const ref = useRef(null);

    // useInView(ref, (isInView) => {
    //     setInView(inView);
    // });

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
                                        initial={{ opacity: 0, y: -60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.6 }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: {
                                                duration: 0.6, // transition duration for hover effect
                                                ease: "easeInOut", // transition easing for hover effect
                                            },
                                        }}
                                        viewport={{ once: false }}
                                    >
                                        <figure>
                                            <Image src="/images/Yogis1.jpg" width={500} height={500} alt="LinkedIn Yogiswara" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title self-center">Yogiswara Adinugraha Pramudita</h2>
                                            <h2 className="card-side text-center">Summary</h2>
                                            <p className="text-center">
                                                I am an adaptable and highly motivated individual who thrives in
                                                new environments and integrates well into diverse teams and
                                                communities. My experience spans web development, system and
                                                application development, iOS development, and game development. As
                                                a programmer, I possess strong logical and abstract thinking
                                                skills, enabling me to analyze and solve complex problems
                                                effectively.
                                            </p>
                                            <p className="text-center">
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
                                        // ref={ref}
                                        className="card card-normal bg-slate-600 w-96 shadow-2xl rounded-2xl"
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1.6 }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: {
                                                duration: 0.6, // transition duration for hover effect
                                                ease: "easeInOut", // transition easing for hover effect
                                            },
                                        }}
                                        viewport={{ once: false }}
                                    >
                                        <figure>
                                            <Image src="/images/Yogis2.jpg" width={500} height={500} alt="LinkedIn Yogiswara" />
                                        </figure>
                                        <div className="card-body">
                                            <h1 className="card-title self-center">Life Story of Me</h1>
                                            <p className="text-center">
                                                I am an adaptable and highly motivated individual who thrives in
                                                new environments and integrates well into diverse teams and
                                                communities. My experience spans web development, system and
                                                application development, iOS development, and game development. As
                                                a programmer, I possess strong logical and abstract thinking
                                                skills, enabling me to analyze and solve complex problems
                                                effectively.
                                            </p>
                                        </div>
{/* umang */}
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
                                <div className="timeline-start mb-10 md:text-end">
                                    <time className="font-bold italic">Playlist</time>
                                    <motion.div
                                        // ref={ref}
                                        className="card card-normal bg-slate-600 w-96 shadow-2xl rounded-2xl"
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1.6 }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: {
                                                duration: 0.6, // transition duration for hover effect
                                                ease: "easeInOut", // transition easing for hover effect
                                            },
                                        }}
                                        viewport={{ once: false }}
                                    >
                                        <figure>
                                            <Image src="/icons/Spotify-Black-Logo.wine.png" width={300} height={300} alt="Spotify" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title self-center">My Playlist</h2>
                                            <h2 className="card-side text-center">Ndak og</h2>
                                            <div className="flex">
                                                <Image src="/images/playlist-ndakog.png" width={200} height={200} alt="Spotify" className="flex-1" />
                                                <a className="flex-1 text-center self-center" href="https://open.spotify.com/playlist/66G9IRzO6CLJ975qpdPwYO?si=2d747d823ca64562" target="_blank">link</a>
                                            </div>
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