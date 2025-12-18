'use client';

import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-start justify-center bg-gradient-to-br from-brand-dark via-brand-primary to-brand-dark text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(74, 158, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-28 pb-20 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">REPARACIÓN DE COMPUTADORAS</span>
            <br />
            <span className="text-white">Y SERVICIOS INFORMÁTICOS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Soluciones tecnológicas integrales en Costa Rica
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle size={20} className="text-brand-light" />
              <span>Heredia y Puriscal</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle size={20} className="text-brand-light" />
              <span>Servicio Rápido y Confiable</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle size={20} className="text-brand-light" />
              <span>Atención Personalizada</span>
            </div>
          </div>

          {/* Sección de contacto destacada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-16 md:mb-20"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
              ¿Necesitas ayuda ahora? Contáctanos
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/50687602146"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#20BA5A] transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle size={24} />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+50687602146"
                className="flex items-center justify-center gap-3 bg-brand-light text-brand-dark px-6 py-4 rounded-lg font-semibold text-lg hover:bg-brand-accent transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone size={24} />
                <span>(506) 8760-2146</span>
              </a>
            </div>
            <p className="text-white/70 text-sm text-center mt-4">
              Respuesta rápida • Atención personalizada • Servicio confiable
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a
          href="#servicios"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-white/70 hover:text-brand-light transition-colors"
        >
          <span className="text-sm mb-2">Desliza para ver más</span>
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}

