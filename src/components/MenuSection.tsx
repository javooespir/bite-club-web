"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "5491100000000"; // TODO: Replace with real WhatsApp number
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%20Bite%20Club!%20Quiero%20hacer%20un%20pedido`;

interface Price {
  simple?: number;
  doble?: number;
  triple?: number;
}

interface Burger {
  id: string;
  name: string;
  description: string;
  badge: string | null;
  veggie?: boolean;
  prices: Price;
  gradient: string;
  accentColor: string;
}

const burgers: Burger[] = [
  {
    id: "og-cheese",
    name: "The OG Cheese",
    description: "Carne smash con cebollita, queso, pepinillos, salsa bite.",
    badge: "Best Seller",
    prices: { simple: 9500, doble: 12500, triple: 13500 },
    gradient: "from-bite-blue-dark to-[#0a1260]",
    accentColor: "text-bite-yellow",
  },
  {
    id: "mac-bite",
    name: "Mac Bite",
    description: "Doble smash con cebollita, cheddar, lechuga, pepinillos, salsa bite.",
    badge: null,
    veggie: true,
    prices: { simple: 11500, doble: 13500 },
    gradient: "from-[#0d1c78] to-[#1a2fa8]",
    accentColor: "text-white",
  },
  {
    id: "bacon-club",
    name: "Bacon Club",
    description: "Doble smash con cebollita, cheddar, cebolla crispy, panceta, salsa bite.",
    badge: "NEW!",
    veggie: true,
    prices: { simple: 11500, doble: 13500, triple: 15500 },
    gradient: "from-[#1a0a0a] to-[#3d0f0f]",
    accentColor: "text-bite-red",
  },
  {
    id: "oklahoma",
    name: "Oklahoma",
    description: "Doble smash con cebolla, cheddar, salsa bite.",
    badge: "NEW!",
    veggie: true,
    prices: { simple: 11500, doble: 13500 },
    gradient: "from-[#0d1c78] to-bite-blue",
    accentColor: "text-bite-yellow",
  },
  {
    id: "spicy",
    name: "Spicy",
    description: "Doble smash con cebollita, cheddar, relish de morrones asados y chiles mexicanos, salsa spicy de chipotle.",
    badge: "NEW!",
    veggie: true,
    prices: { simple: 11500, doble: 13500, triple: 15500 },
    gradient: "from-[#3d0a00] to-[#7a1800]",
    accentColor: "text-orange-400",
  },
  {
    id: "american",
    name: "American",
    description: "Doble smash con cebollita, cheddar, lechuga, tomate, salsa bite.",
    badge: "NEW!",
    veggie: true,
    prices: { simple: 11500, doble: 13500 },
    gradient: "from-[#0a0d3d] to-[#1a2fa8]",
    accentColor: "text-white",
  },
  {
    id: "cuarto-club",
    name: "Cuarto Club",
    description: "Doble smash, cheddar, cebollita, ketchup, mostaza.",
    badge: null,
    veggie: true,
    prices: { simple: 11500, doble: 13500 },
    gradient: "from-[#1a1200] to-[#3d2d00]",
    accentColor: "text-bite-yellow",
  },
  {
    id: "chicken-club",
    name: "Chicken Club",
    description: "Pechuga de pollo crispy, salsa bite.",
    badge: null,
    prices: { simple: 10500, doble: 12500 },
    gradient: "from-[#3d2200] to-[#7a4200]",
    accentColor: "text-orange-300",
  },
  {
    id: "bjam-oniom",
    name: "B'Jam Oniom",
    description: "Doble smash con cebollita, cheddar, aros de cebolla, mermelada de bacon, mayo siracha.",
    badge: null,
    prices: { simple: 12500, doble: 14500 },
    gradient: "from-[#1a0d2e] to-[#2d1a52]",
    accentColor: "text-purple-300",
  },
  {
    id: "royal-club",
    name: "Royal Club",
    description: "Doble smash con cebollita, cheddar, ingredientes especiales, salsa secreta.",
    badge: "NEW!",
    veggie: true,
    prices: { simple: 11500, doble: 13500 },
    gradient: "from-[#0d1c78] to-[#1e38c4]",
    accentColor: "text-bite-yellow",
  },
];

function formatPrice(n: number) {
  return `$${n.toLocaleString("es-AR")}`;
}

function PriceLine({ label, amount }: { label: string; amount: number }) {
  return (
    <div className="flex items-center justify-between py-1 border-b border-gray-100 last:border-0">
      <span className="font-heading font-700 text-gray-700 text-sm uppercase tracking-wider">
        {label}
      </span>
      <div className="flex items-center gap-1">
        <span className="text-gray-300 text-xs">· · · · ·</span>
        <span className="font-heading font-700 text-bite-blue text-sm ml-2">
          {formatPrice(amount)}
        </span>
      </div>
    </div>
  );
}

function BurgerCard({ burger, index }: { burger: Burger; index: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.25, 1, 0.5, 1] }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100"
    >
      {/* Image area */}
      <div className={`relative h-44 bg-gradient-to-br ${burger.gradient} overflow-hidden flex-shrink-0`}>
        {/* Ghost text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span
            className="font-heading font-black text-white/5 whitespace-nowrap leading-none"
            style={{ fontSize: "5rem" }}
            aria-hidden="true"
          >
            {burger.name.split(" ")[0].toUpperCase()}
          </span>
        </div>

        {/* Dots overlay */}
        <div className="absolute inset-0 dots-pattern opacity-20" />

        {/* Burger name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3
            className={`font-heading font-black uppercase leading-tight ${burger.accentColor}`}
            style={{ fontSize: "clamp(1.4rem, 3vw, 1.75rem)" }}
          >
            {burger.name}
          </h3>
        </div>

        {/* Badge */}
        {burger.badge && (
          <div className="absolute top-3 right-3">
            <span
              className={`font-heading font-black text-xs uppercase px-2.5 py-1 rounded-full shadow-lg ${
                burger.badge === "Best Seller"
                  ? "bg-bite-yellow text-bite-blue"
                  : "bg-bite-red text-white"
              }`}
            >
              {burger.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-gray-500 font-body text-sm leading-relaxed mb-4 flex-1">
          {burger.description}
        </p>

        {/* Prices */}
        <div className="space-y-0 mb-4">
          {burger.prices.simple && (
            <PriceLine label="Simple" amount={burger.prices.simple} />
          )}
          {burger.prices.doble && (
            <PriceLine label="Doble" amount={burger.prices.doble} />
          )}
          {burger.prices.triple && (
            <PriceLine label="Triple" amount={burger.prices.triple} />
          )}
        </div>

        {/* Veggie note */}
        {burger.veggie && (
          <p className="text-green-600 font-body text-xs mt-1">
            ✓ Opcional: medallón veggie NotBurger
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default function MenuSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="menu" className="relative yellow-glow-bg py-20 lg:py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block bg-bite-blue text-white font-heading font-700 text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4"
          >
            El Menú
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black text-bite-blue uppercase leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Elegí la tuya
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 font-body text-lg mt-3"
          >
            Todas incluyen papas. Todas van smashed.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {burgers.map((burger, i) => (
            <BurgerCard key={burger.id} burger={burger} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 font-body mb-5">¿Listo para armarla?</p>
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-bite-blue hover:bg-bite-blue-dark text-white font-heading font-800 text-base uppercase tracking-widest px-10 py-4 rounded-full transition-colors duration-200 cursor-pointer shadow-lg shadow-blue-900/25"
          >
            <MessageCircle size={20} />
            Pedí por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
