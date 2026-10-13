"use client";
import { motion } from "framer-motion";

type Item = {
  logo: string; role: string; org: string; type: string;
  dates: string; bullets: string[]; images: string[];
};

export default function Card({ item }: { item: Item }) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-head">
        <img src={item.logo} alt="" />
        <div>
          <h3>{item.role}</h3>
          <p>{item.org} · {item.type}</p>
          <small className="mono">{item.dates}</small>
        </div>
      </div>
      <ul>
        {item.bullets.map((b) => (
          <li key={b} dangerouslySetInnerHTML={{ __html: b }} />
        ))}
      </ul>
      {item.images.length > 0 && (
        <div className="thumbs">
          {item.images.map((src) => <img key={src} src={src} alt="" />)}
        </div>
      )}
    </motion.article>
  );
}