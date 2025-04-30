"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-background"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
