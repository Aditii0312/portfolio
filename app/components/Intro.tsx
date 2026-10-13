"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "auto" : "hidden";
  }, [open]);

  const openIt = () => {
    setOpen(true);
    window.dispatchEvent(new Event("sticker-burst"));
  };

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          key="intro"
          className="intro"
          onClick={openIt}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <img src="/intro.jpeg" alt="Click to open" className="intro-img" />
          <p className="intro-hint mono">click to open</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}