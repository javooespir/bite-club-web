import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-bc",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bite Club — Smash Burgers | Ituzaingó",
  description:
    "Las mejores smash burgers artesanales de Ituzaingó. Armala a tu manera. Pedí por WhatsApp, PedidosYa o Rappi.",
  keywords: ["smash burger", "hamburguesas", "Ituzaingó", "bite club", "delivery", "artesanal"],
  openGraph: {
    title: "Bite Club — Smash Burgers",
    description: "Armala a tu manera. Smash burgers artesanales en Ituzaingó.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${barlow.variable} h-full`}>
      <body className="min-h-full antialiased bg-white">{children}</body>
    </html>
  );
}
