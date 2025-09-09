"use client";

import { frame, motion, useSpring } from "framer-motion";
import { image } from "framer-motion/client";
import { RefObject, useEffect, useRef } from "react";

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="grid items-center justify-items-center min-h-screen md:items-center sm:items-center">
        <main className="flex flex-col md:items-start sm:items-center">
          <motion.div ref={ref} style={{ ...ball, x, y }} />
        </main>
    </div>
  )
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        y.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}

/**
 * ==============   Styles   ================
 */

const ball = {
  backgroundImage: "./images/logo-transparent.png",
  width: 100,
  height: 100,
  backgroundColor: "#AA89D8",
  borderRadius: "50%",
};