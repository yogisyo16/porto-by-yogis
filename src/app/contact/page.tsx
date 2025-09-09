"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "@/hooks/useFollowPointer"; // Import the hook

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <main className="flex flex-col md:items-start sm:items-center">
        <motion.div ref={ref} style={{ ...ball, x, y }} />
      </main>
    </div>
  );
}

// ==============   Styles   ================
const ball = {
  // Corrected background image path for Next.js
  backgroundImage: "url(/logo-transparent.png)",
  width: 100,
  height: 100,
  backgroundColor: "#AA89D8",
  borderRadius: "50%",
};