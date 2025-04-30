"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatePage() {
  const [stage, setStage] = useState<"initial" | "shrink" | "bounce">(
    "initial"
  );

  useEffect(() => {
    // Start shrinking animation after 1 second
    const shrinkTimer = setTimeout(() => {
      setStage("shrink");
    }, 1000);

    // Start bouncing animation after shrink
    const bounceTimer = setTimeout(() => {
      setStage("bounce");
    }, 2500);

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(bounceTimer);
    };
  }, []);

  const ellipseStyle = {
    background: "#0052FF",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  };

  const sphereStyle = {
    background: "radial-gradient(circle at 30% 30%, #4D85FF, #0052FF)",
    boxShadow:
      "inset -10px -10px 20px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1)",
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <AnimatePresence mode="wait">
        {/* {stage === "initial" && (
          <motion.div
            key="ellipse"
            initial={{ scale: 1, y: 0 }}
            animate={{ scale: 0.8 }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className="w-[400px] h-48 rounded-full"
            style={ellipseStyle}
          />
        )} */}

        {stage === "shrink" && (
          <motion.div
            key="shrinking-ellipse"
            initial={{
              scale: 0.8,
              opacity: 1,
              width: "400px",
              height: "192px",
            }}
            animate={{
              scale: 0,
              opacity: 0,
              width: "64px",
              height: "94px",
              borderRadius: "50%",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="rounded-full"
            style={ellipseStyle}
          />
        )}

        {stage === "bounce" && (
          <motion.div
            key="bouncing-ball"
            initial={{ scale: 0, y: -200, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [-200, 200, -150, 200, -100, 200, -50, 200, 0],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 0.95, 1],
              ease: "easeInOut",
            }}
            className="w-16 h-16 rounded-full"
            style={sphereStyle}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
