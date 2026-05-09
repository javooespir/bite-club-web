"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WA_NUMBER = "5491100000000"; // TODO: Replace with real WhatsApp number
const WA_MESSAGE = "Hola%20Bite%20Club!%20Quiero%20hacer%20un%20pedido";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const EASE = [0.25, 1, 0.5, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !visualRef.current) return;

      gsap.to(visualRef.current, {
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    },
    { scope: heroRef }
  );

  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative bg-bite-blue min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      aria-label="Sección principal"
    >
      {/* Dots pattern background */}
      <div className="absolute inset-0 dots-pattern opacity-40" />

      {/* Diagonal stripe */}
      <div className="absolute inset-0 stripe-accent" />

      {/* Animated color orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-bite-blue-mid/30 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-bite-yellow/8 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={stagger}
            initial={prefersReducedMotion ? "show" : "hidden"}
            animate="show"
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="mb-3">
              <span className="inline-flex items-center gap-2 text-bite-yellow font-heading font-700 text-sm uppercase tracking-[0.2em]">
                <span className="w-8 h-px bg-bite-yellow" />
                Ituzaingó, Buenos Aires
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading font-black text-white leading-[0.88] uppercase mb-2"
              style={{ fontSize: "clamp(4.5rem, 11vw, 8.5rem)" }}
            >
              Smash
            </motion.h1>

            <motion.h1
              variants={fadeUp}
              className="font-heading font-black text-bite-yellow leading-[0.88] uppercase mb-6"
              style={{ fontSize: "clamp(4.5rem, 11vw, 8.5rem)" }}
            >
              Burgers
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/75 font-body text-lg lg:text-xl max-w-sm leading-relaxed mb-2"
            >
              Artesanales. Aplastadas en el momento.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/60 font-body text-base max-w-xs leading-relaxed mb-10"
            >
              Cada bite, armado a tu manera.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eb358] text-white font-heading font-800 text-base uppercase tracking-widest px-8 py-4 rounded-full transition-colors duration-200 cursor-pointer shadow-lg shadow-green-900/30"
              >
                <MessageCircle size={20} />
                Hacé tu pedido
              </motion.a>

              <motion.button
                onClick={scrollToMenu}
                whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-heading font-700 text-base uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 cursor-pointer"
              >
                Ver el menú
                <ChevronDown size={18} />
              </motion.button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-white/15"
            >
              <div className="text-center">
                <p className="font-heading font-black text-white text-2xl">100%</p>
                <p className="text-white/50 text-xs uppercase tracking-widest font-body">Artesanal</p>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div className="text-center">
                <p className="font-heading font-black text-bite-yellow text-2xl">Smashed</p>
                <p className="text-white/50 text-xs uppercase tracking-widest font-body">En el momento</p>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div className="text-center">
                <p className="font-heading font-black text-white text-2xl">9</p>
                <p className="text-white/50 text-xs uppercase tracking-widest font-body">Opciones</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <div ref={visualRef} className="flex justify-center lg:justify-end">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="relative"
            >
              {/* Main visual card */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl bg-bite-blue-dark overflow-hidden shadow-2xl border border-white/10">
                {/* Ghost background text */}
                <div className="absolute inset-0 flex items-center justify-center select-none overflow-hidden">
                  <span
                    className="font-heading font-black text-white/5 leading-none whitespace-nowrap"
                    style={{ fontSize: "clamp(6rem, 18vw, 14rem)" }}
                    aria-hidden="true"
                  >
                    SMASH
                  </span>
                </div>

                {/* Decorative dots */}
                <div className="absolute inset-0 dots-pattern opacity-30" />

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="inline-block bg-bite-red text-white font-heading font-800 text-xs uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
                    Best Seller
                  </div>

                  <h2
                    className="font-heading font-black text-white uppercase leading-[0.88] mb-1"
                    style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
                  >
                    The OG
                  </h2>
                  <h2
                    className="font-heading font-black text-bite-yellow uppercase leading-[0.88] mb-5"
                    style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
                  >
                    Smash
                  </h2>

                  <p className="text-white/55 font-body text-sm leading-relaxed max-w-[200px]">
                    Carne smashed, doble cheddar,
                    pepinillos, salsa bite club.
                  </p>

                  <div className="mt-5 space-y-1 text-center">
                    <p className="text-white/90 font-body text-sm">
                      &ldquo;Armala a tu manera.&rdquo;
                    </p>
                    <p className="text-bite-yellow font-heading font-700 text-sm uppercase tracking-widest">
                      ¡Join the Club!
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={prefersReducedMotion ? {} : {
                  y: [0, -10, 0],
                  rotate: [-3, 3, -3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-bite-red text-white font-heading font-black text-sm uppercase px-3 py-2 rounded-xl shadow-lg"
                aria-hidden="true"
              >
                NEW!
              </motion.div>

              <motion.div
                animate={prefersReducedMotion ? {} : {
                  y: [0, 8, 0],
                  rotate: [2, -2, 2],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-4 bg-bite-yellow text-bite-blue font-heading font-black text-xs uppercase px-3 py-2 rounded-xl shadow-lg"
                aria-hidden="true"
              >
                Smashed ✓
              </motion.div>

              {/* Papas tag */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-1/2 -right-16 lg:-right-20 -translate-y-1/2 bg-white text-bite-blue font-heading font-700 text-xs uppercase tracking-wider px-3 py-2 rounded-xl shadow-md rotate-90 origin-left hidden lg:block whitespace-nowrap"
                aria-hidden="true"
              >
                Con papas
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/40 text-xs font-body uppercase tracking-widest">Scrolleá</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
