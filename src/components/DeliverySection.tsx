"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MessageCircle, ExternalLink } from "lucide-react";

const WA_NUMBER = "5491100000000"; // TODO: Replace with real WhatsApp number
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%20Bite%20Club!%20Quiero%20hacer%20un%20pedido`;

const platforms = [
  {
    name: "WhatsApp",
    desc: "Directo al local. Sin intermediarios.",
    color: "bg-[#25D366]",
    textColor: "text-white",
    icon: "💬",
    href: WA_URL,
    primary: true,
  },
  {
    name: "PedidosYa",
    desc: "Delivery rápido a tu puerta.",
    color: "bg-[#FA0050]",
    textColor: "text-white",
    icon: "🛵",
    href: "#",
    primary: false,
  },
  {
    name: "Rappi",
    desc: "También nos encontrás en Rappi.",
    color: "bg-[#FF441F]",
    textColor: "text-white",
    icon: "📦",
    href: "#",
    primary: false,
  },
];

export default function DeliverySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="delivery" className="bg-bite-blue-dark py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/10 text-white/60 font-heading font-700 text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4"
          >
            Delivery y retiro
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black text-white uppercase leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Pedí ahora
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 font-body text-lg mt-3"
          >
            Llega a tu puerta o retirás en el local.
          </motion.p>
        </div>

        {/* Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              className={`relative ${platform.color} rounded-2xl p-6 flex flex-col gap-3 cursor-pointer shadow-lg transition-shadow hover:shadow-2xl ${
                platform.primary ? "ring-2 ring-white/20" : ""
              }`}
            >
              {platform.primary && (
                <div className="absolute top-3 right-3 bg-white/20 text-white font-heading font-700 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Recomendado
                </div>
              )}

              <span className="text-3xl" role="img" aria-hidden="true">{platform.icon}</span>

              <div>
                <h3 className={`font-heading font-black text-xl uppercase ${platform.textColor}`}>
                  {platform.name}
                </h3>
                <p className={`font-body text-sm mt-1 ${platform.textColor} opacity-75`}>
                  {platform.desc}
                </p>
              </div>

              <div className={`flex items-center gap-1 ${platform.textColor} opacity-60 text-xs font-body`}>
                <ExternalLink size={12} />
                <span>Ir ahora</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Big WA CTA */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1eb358] text-white font-heading font-900 text-lg uppercase tracking-widest px-12 py-5 rounded-full transition-colors duration-200 cursor-pointer shadow-2xl shadow-green-900/30"
          >
            <MessageCircle size={24} />
            Hacé tu pedido por WhatsApp
          </motion.a>
          <p className="text-white/30 font-body text-sm mt-4">
            Respondemos rápido. Sin cargos extra.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
