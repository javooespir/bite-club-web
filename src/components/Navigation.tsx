"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";

const WA_NUMBER = "5491100000000"; // TODO: Replace with real WhatsApp number
const WA_MESSAGE = "Hola%20Bite%20Club!%20Quiero%20hacer%20un%20pedido";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const links = [
  { label: "Menú", href: "#menu" },
  { label: "Horarios", href: "#horarios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Delivery", href: "#delivery" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bite-blue/97 backdrop-blur-sm shadow-2xl"
            : "bg-bite-blue"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <Image
              src="/logo-bite.png"
              alt="Bite Club Burgers"
              width={44}
              height={44}
              className="rounded-full drop-shadow-md"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="font-heading font-600 text-white/80 hover:text-white text-sm uppercase tracking-widest transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb358] text-white font-heading font-700 text-sm uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <MessageCircle size={16} />
              Pedí Ahora
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-bite-blue-dark z-50 md:hidden flex flex-col pt-20 px-8 pb-8"
            >
              <button
                className="absolute top-4 right-4 text-white p-2 cursor-pointer"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>

              <nav className="flex flex-col gap-6" aria-label="Menú móvil">
                {links.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleLink(link.href)}
                    className="font-heading font-800 text-white text-2xl uppercase tracking-widest text-left cursor-pointer hover:text-bite-yellow transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-heading font-700 text-sm uppercase tracking-widest px-5 py-4 rounded-full"
                >
                  <MessageCircle size={18} />
                  Hacé tu pedido
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
