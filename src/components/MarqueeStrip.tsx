"use client";

const items = [
  "SMASH BURGERS",
  "★",
  "DOBLE CHEDDAR",
  "★",
  "ARTESANALES",
  "★",
  "ITUZAINGÓ",
  "★",
  "JOIN THE CLUB",
  "★",
  "TODAS VAN CON PAPAS",
  "★",
  "SMASH BURGERS",
  "★",
  "DOBLE CHEDDAR",
  "★",
  "ARTESANALES",
  "★",
  "ITUZAINGÓ",
  "★",
  "JOIN THE CLUB",
  "★",
  "TODAS VAN CON PAPAS",
  "★",
];

export default function MarqueeStrip() {
  return (
    <div
      className="bg-bite-red overflow-hidden py-4 border-y-4 border-white/10"
      aria-hidden="true"
    >
      <div className="marquee-track flex gap-8 whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className={`font-heading font-black uppercase tracking-widest text-lg ${
              item === "★" ? "text-white/60 text-base" : "text-white"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
