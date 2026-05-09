import { MessageCircle, Share2 } from "lucide-react";

const WA_NUMBER = "5491100000000"; // TODO: Replace with real WhatsApp number
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%20Bite%20Club!%20Quiero%20hacer%20un%20pedido`;

const footerLinks = [
  { label: "Menú", href: "#menu" },
  { label: "Horarios", href: "#horarios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Delivery", href: "#delivery" },
];

export default function Footer() {
  return (
    <footer className="bg-bite-blue-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-bite-yellow rounded-full flex items-center justify-center">
                <span className="text-bite-blue text-xs font-heading font-black leading-none">BC</span>
              </div>
              <span className="font-heading font-black text-white text-xl tracking-wider uppercase">
                Bite Club
              </span>
            </div>
            <p className="text-white/50 font-body text-sm leading-relaxed">
              Smash burgers artesanales en Ituzaingó.
              Armala a tu manera.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/biteclubok/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Bite Club"
                className="w-10 h-10 bg-white/10 hover:bg-bite-yellow hover:text-bite-blue text-white rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <Share2 size={18} />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Bite Club"
                className="w-10 h-10 bg-white/10 hover:bg-[#25D366] text-white rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-700 text-white/60 text-xs uppercase tracking-widest mb-5">
              Navegación
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Pie de página">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white font-body text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-700 text-white/60 text-xs uppercase tracking-widest mb-5">
              Contacto
            </h3>
            <address className="not-italic space-y-3">
              <p className="text-white/60 font-body text-sm">
                24 de Octubre 532,
                <br />
                Ituzaingó, Buenos Aires
              </p>
              <div className="space-y-1 text-white/40 font-body text-xs">
                <p>Mediodías: Mié–Vie 11:30–15:30</p>
                <p>Noches: Mié–Lun 19:00–23:00</p>
                <p>Martes: Cerrado</p>
              </div>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#25D366] hover:text-white font-body text-sm transition-colors duration-200"
              >
                <MessageCircle size={14} />
                Pedí por WhatsApp
              </a>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 font-body text-xs">
            © 2024 Bite Club. Todos los derechos reservados.
          </p>
          <p className="text-white/20 font-body text-xs">
            Built with{" "}
            <span className="text-white/40">Claude Web Builder</span>
            {" "}by{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
