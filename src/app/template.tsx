"use client";

import { motion } from "framer-motion";

export default function Template({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0, boxShadow: "0px 0px #000" }}
            animate={{ y: 0, opacity: 1, boxShadow: "10px 10px #000" }}
            transition={{ ease: "easeIn", duration: 1 }}
        >
            {children}
        </motion.div>
    );
}