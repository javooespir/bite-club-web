"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, ExternalLink } from "lucide-react";

const schedule = [
  {
    period: "Mediodías",
    icon: "☀️",
    days: "Miérc · Juev · Vier",
    hours: "11:30 a 15:30 hs",
    open: true,
  },
  {
    period: "Noches",
    icon: "🌙",
    days: "Miércoles a Lunes",
    hours: "19:00 a 23:00 hs",
    open: true,
  },
  {
    period: "Martes",
    icon: "💤",
    days: "Todo el día",
    hours: "Cerrado",
    open: false,
  },
];

export default function HoursSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="horarios" className="bg-bite-off-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Horarios */}
          <div>
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-bite-blue font-heading font-700 text-xs uppercase tracking-[0.2em] mb-4"
            >
              <Clock size={14} />
              Horarios
            </motion.div>

            <motion.h2
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-bite-blue uppercase leading-tight mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Cuándo estamos
            </motion.h2>

            <div className="space-y-4">
              {schedule.map((item, i) => (
                <motion.div
                  key={item.period}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className={`rounded-2xl p-6 border-2 ${
                    item.open
                      ? "bg-white border-bite-blue/10 hover:border-bite-blue/30"
                      : "bg-gray-50 border-gray-200 opacity-60"
                  } transition-all duration-200`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl" role="img" aria-hidden="true">{item.icon}</span>
                        <h3 className="font-heading font-black text-bite-blue uppercase text-xl">
                          {item.period}
                        </h3>
                      </div>
                      <p className="text-gray-500 font-body text-sm">{item.days}</p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-heading font-800 uppercase text-lg ${
                          item.open ? "text-bite-blue" : "text-gray-400"
                        }`}
                      >
                        {item.hours}
                      </p>
                      <span
                        className={`inline-block text-xs font-body px-2 py-0.5 rounded-full mt-1 ${
                          item.open
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {item.open ? "Abrimos" : "Cerrado"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-bite-red font-heading font-700 text-xs uppercase tracking-[0.2em] mb-4"
            >
              <MapPin size={14} />
              Dónde estamos
            </motion.div>

            <motion.h2
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-heading font-black text-bite-blue uppercase leading-tight mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Encontranos
            </motion.h2>

            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="bg-bite-blue rounded-2xl p-8 text-white mb-4"
            >
              <div className="dots-pattern absolute inset-0 opacity-20 rounded-2xl" />
              <MapPin size={24} className="text-bite-yellow mb-4" />

              <h3 className="font-heading font-black text-2xl uppercase mb-2">
                24 de Octubre 532
              </h3>
              <p className="font-body text-white/70 text-lg mb-6">Ituzaingó, Buenos Aires</p>

              <a
                href="https://maps.google.com/?q=24+de+Octubre+532+Ituzaingo+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-bite-blue font-heading font-700 text-sm uppercase tracking-wider px-5 py-3 rounded-full hover:bg-bite-yellow transition-colors duration-200 cursor-pointer"
              >
                <ExternalLink size={14} />
                Ver en Google Maps
              </a>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex items-center justify-center"
            >
              <div className="text-center text-gray-400">
                <MapPin size={32} className="mx-auto mb-2" />
                <p className="font-body text-sm">Ituzaingó, Buenos Aires</p>
                <a
                  href="https://maps.google.com/?q=24+de+Octubre+532+Ituzaingo+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bite-blue text-xs hover:underline"
                >
                  Abrir mapa ↗
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
