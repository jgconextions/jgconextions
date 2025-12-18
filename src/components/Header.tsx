'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-brand-dark'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-white">
              <h1 className="text-xl md:text-2xl font-bold">
                <span className="text-brand-light">JG</span> CONEXTIONS
              </h1>
              <p className="text-xs text-white/70 hidden sm:block">
                Reparación y Servicio
              </p>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#inicio"
              className="text-white hover:text-brand-light transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="text-white hover:text-brand-light transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#nosotros"
              className="text-white hover:text-brand-light transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="#trabajos"
              className="text-white hover:text-brand-light transition-colors"
            >
              Trabajos
            </Link>
            <div className="flex items-center gap-3 pl-4 border-l border-white/20">
              <a
                href="tel:+50687602146"
                className="flex items-center gap-1.5 text-white/80 hover:text-brand-light transition-colors text-sm"
                title="Llamar"
              >
                <Phone size={16} />
                <span className="hidden lg:inline">(506) 8760-2146</span>
              </a>
              <a
                href="https://wa.me/50687602146"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/80 hover:text-[#25D366] transition-colors text-sm"
                title="WhatsApp"
              >
                <MessageCircle size={16} />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
            </div>
            <Link
              href="#contacto"
              className="bg-brand-light text-brand-dark px-5 py-2 rounded-lg font-semibold hover:bg-brand-accent transition-colors text-sm"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="#inicio"
                className="text-white hover:text-brand-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="text-white hover:text-brand-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#nosotros"
                className="text-white hover:text-brand-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#trabajos"
                className="text-white hover:text-brand-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Trabajos
              </Link>
              <Link
                href="#contacto"
                className="bg-brand-light text-brand-dark px-6 py-2 rounded-lg font-semibold text-center hover:bg-brand-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                <a
                  href="tel:+50687602146"
                  className="flex items-center gap-2 text-white/80 text-sm hover:text-brand-light transition-colors"
                >
                  <Phone size={16} />
                  <span>(506) 8760-2146</span>
                </a>
                <a
                  href="https://wa.me/50687602146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 text-sm hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

