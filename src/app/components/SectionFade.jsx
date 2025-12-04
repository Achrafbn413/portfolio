"use client";
import { motion } from "framer-motion";

export default function SectionFade({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Border neon */}
      <div className="absolute -inset-0.5 bg-cyan-500/10 blur-xl rounded-2xl opacity-20" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
