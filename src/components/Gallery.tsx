'use client';

import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import galleryData from '@/data/gallery.json';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string | null;
}

const galleryImages: GalleryImage[] = galleryData.images;

export default function Gallery() {
  return (
    <section id="trabajos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Trabajos Realizados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-light to-brand-accent mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Algunos de nuestros proyectos y trabajos realizados para nuestros
            clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {item.image ? (
                <div className="relative w-full h-[400px] bg-gray-100 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent z-10 flex items-end pointer-events-none">
                    <div className="p-4 text-white w-full">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.category}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-[400px] bg-gradient-to-br from-brand-dark/80 to-brand-primary/80 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <ImageIcon size={48} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">
                      Agregar imagen de trabajo realizado
                    </p>
                    <p className="text-xs mt-2 opacity-50">
                      {item.title} - {item.category}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            ¿Quieres ver más de nuestro trabajo?
          </p>
          <a
            href="https://www.facebook.com/jgconextions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-light text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-brand-accent transition-colors"
          >
            Visítanos en Redes Sociales
          </a>
        </motion.div>
      </div>
    </section>
  );
}

