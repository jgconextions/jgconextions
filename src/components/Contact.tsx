'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-brand-dark to-brand-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-light to-brand-accent mx-auto mb-4"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Estamos aquí para ayudarte con todas tus necesidades tecnológicas
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* CTAs principales destacados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="https://wa.me/50687602146"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#25D366] text-white p-8 rounded-2xl shadow-2xl hover:bg-[#20BA5A] transition-all flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-white/90 mb-4">Respuesta inmediata</p>
              <span className="text-lg font-semibold">Contáctanos ahora →</span>
            </motion.a>

            <motion.a
              href="tel:+50687602146"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-brand-light text-brand-dark p-8 rounded-2xl shadow-2xl hover:bg-brand-accent transition-all flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-brand-dark/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Llámanos</h3>
              <p className="text-brand-dark/80 mb-4">Atención directa</p>
              <span className="text-lg font-semibold">(506) 8760-2146</span>
            </motion.a>
          </div>

          {/* Información adicional */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-brand-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
                  <p className="text-white/80 text-lg">
                    Heredia y Puriscal, Costa Rica
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-brand-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horario</h3>
                  <p className="text-white/80 text-lg">
                    Lunes a Sábado<br />
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={24} className="text-brand-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Garantía</h3>
                  <p className="text-white/80 text-lg">
                    Servicio garantizado<br />
                    y confiable
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Síguenos en Redes Sociales</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://www.facebook.com/jgconextions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/jgconextions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://www.tiktok.com/@jgconextions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-black hover:scale-110 transition-all"
                aria-label="TikTok"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/50687602146"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:scale-110 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

