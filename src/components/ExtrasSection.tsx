"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const extras = [
  { name: "Lechuga y tomate", price: 1000 },
  { name: "Panceta ahumada", price: 1500 },
  { name: "Huevo", price: 1000 },
  { name: "Cebolla crispy", price: 1000 },
  { name: "Cebolla caramelizada", price: 1000 },
  { name: "Pepinillos", price: 1000 },
  { name: "Mermelada de bacon", price: 1500 },
  { name: "Morrones asados", price: 1500 },
  { name: "Provoleta", price: 1500 },
  { name: "Queso azul", price: 1500 },
  { name: "Carne con cheddar", price: 2500 },
];

function formatPrice(n: number) {
  return `$${n.toLocaleString("es-AR")}`;
}

export default function ExtrasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-bite-blue py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="text-center mb-12">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/10 text-white/70 font-heading font-700 text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4"
          >
            Personalizá
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black text-white uppercase leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Hacé la tuya
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 font-body text-lg mt-3"
          >
            En el Club, cada uno tiene su versión.
          </motion.p>
        </div>

        {/* Extras grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {extras.map((extra, i) => (
            <motion.div
              key={extra.name}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
              className="bg-white/8 hover:bg-white/12 border border-white/15 rounded-xl p-4 flex flex-col gap-2 transition-all duration-200 cursor-default"
            >
              <span className="font-body text-white/90 text-sm leading-snug">{extra.name}</span>
              <span className="font-heading font-800 text-bite-yellow text-base">
                {formatPrice(extra.price)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-white/40 font-body text-sm mt-10 uppercase tracking-widest"
        >
          Todas las hamburguesas incluyen papas
        </motion.p>
      </div>
    </section>
  );
}
