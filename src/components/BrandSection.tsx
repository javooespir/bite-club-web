"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function BrandSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const stats = [
    { value: "100%", label: "Carne fresca", desc: "Sin congelados, nunca." },
    { value: "Smashed", label: "En el momento", desc: "Cada pedido, aplastado al instante." },
    { value: "Club", label: "Tu versión", desc: "Armala exactamente como te gusta." },
  ];

  return (
    <section
      id="nosotros"
      className="bg-bite-off-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Big statement */}
          <div>
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block bg-bite-red/10 text-bite-red font-heading font-700 text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6"
            >
              Nuestra historia
            </motion.div>

            <motion.h2
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-black text-bite-blue uppercase leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              En el Club, cada uno tiene su versión
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-600 font-body text-lg leading-relaxed mb-4"
            >
              Bite Club nació con una idea simple: una buena burger no tiene por qué ser complicada.
              Carne fresca, aplastada fuerte sobre la plancha caliente, doble cheddar que se derrite
              solo, y la salsa bite que lo une todo.
            </motion.p>

            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-500 font-body text-base leading-relaxed"
            >
              Acá no hay fórmula única. La armás como querés. Por eso se llama Club.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 mt-10 pt-8 border-t border-gray-200"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex-1">
                  <p className="font-heading font-black text-bite-blue text-2xl uppercase mb-1">
                    {stat.value}
                  </p>
                  <p className="font-heading font-700 text-gray-700 text-sm uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="text-gray-400 font-body text-sm">{stat.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual card */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-bite-blue rounded-3xl overflow-hidden p-10 aspect-square flex flex-col justify-between">
              <div className="dots-pattern absolute inset-0 opacity-30" />

              <div className="relative z-10">
                <span className="inline-block bg-bite-red text-white font-heading font-800 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  #RealCheesebu... 😂
                </span>
                <p
                  className="font-heading font-black text-white uppercase leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  "Armala a tu manera."
                </p>
                <p
                  className="font-heading font-700 text-bite-yellow uppercase text-xl mt-2"
                >
                  ¡Join the Club!
                </p>
              </div>

              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-bite-yellow" />
                  <span className="text-white/70 font-body text-sm">24 de Octubre 532, Ituzaingó</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span className="text-white/70 font-body text-sm">WhatsApp · PedidosYa · Rappi</span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={prefersReducedMotion ? {} : {
                y: [0, -8, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-bite-yellow text-bite-blue font-heading font-black text-sm uppercase px-4 py-2.5 rounded-2xl shadow-xl"
              aria-hidden="true"
            >
              Smash Club
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
