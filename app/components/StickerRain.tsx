"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EMOJIS = ["👠", "🎀", "💗", "✨"];

type Piece = {
  id: number; emoji: string; left: number; size: number;
  delay: number; duration: number; drift: number; rotate: number;
};

export default function StickerRain() {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    const fire = () => {
      const batch: Piece[] = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        left: 5 + Math.random() * 90,
        size: 24 + Math.random() * 20,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1.2,
        drift: (Math.random() - 0.5) * 100,
        rotate: (Math.random() - 0.5) * 360,
      }));
      setPieces(batch);
      setTimeout(() => setPieces([]), 4500);
    };
    window.addEventListener("sticker-burst", fire);
    return () => window.removeEventListener("sticker-burst", fire);
  }, []);

  return (
    <div className="rain">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="rain-piece"
          style={{ left: `${p.left}%`, fontSize: p.size }}
          initial={{ y: -80, x: 0, rotate: 0, opacity: 1 }}
          animate={{ y: "110vh", x: p.drift, rotate: p.rotate }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
}