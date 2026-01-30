import Link from 'next/link';
import { Facebook, Instagram, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-light">JG</span> CONEXTIONS
            </h3>
            <p className="text-white/70 mb-4">
              Soluciones integrales en redes, mantenimiento de equipos
              informáticos, mantenimiento de Aires Acondicionados, reparación
              de impresoras, instalación y reparación de cámaras de CCTV y más.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
              <MapPin size={16} />
              <span>Heredia y Puriscal, Costa Rica</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="text-white/70 hover:text-brand-light transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-white/70 hover:text-brand-light transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#nosotros"
                  className="text-white/70 hover:text-brand-light transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#trabajos"
                  className="text-white/70 hover:text-brand-light transition-colors"
                >
                  Trabajos Realizados
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-white/70 hover:text-brand-light transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto y redes sociales */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+50687602146"
                className="flex items-center gap-2 text-white/70 hover:text-brand-light transition-colors"
              >
                <Phone size={18} />
                <span>(506) 8760-2146</span>
              </a>
              <a
                href="https://wa.me/50687602146"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-3">Síguenos</h5>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/jgconextions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-light transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/jgconextions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-light transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@jgconextions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-light transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>
            © 2026 JG Conextions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

