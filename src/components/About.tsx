'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: CheckCircle,
    title: 'Compromiso con la calidad',
  },
  {
    icon: Heart,
    title: 'Confianza y transparencia',
  },
  {
    icon: Target,
    title: 'Trabajo en equipo',
  },
  {
    icon: Eye,
    title: 'Atención personalizada',
  },
  {
    icon: CheckCircle,
    title: 'Innovación constante',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-light to-brand-accent mx-auto mb-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-light to-brand-accent rounded-lg flex items-center justify-center">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Misión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              En JGCONEXTIONS, nos dedicamos a ofrecer soluciones tecnológicas
              de alta calidad, adaptadas a las necesidades de cada cliente.
              Brindamos servicios de mantenimiento, reparación e instalación de
              equipos tecnológicos y sistemas de seguridad, con el compromiso de
              proporcionar un servicio rápido, confiable y eficiente.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-light to-brand-accent rounded-lg flex items-center justify-center">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Visión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser la empresa líder en el mercado local, destacándonos por nuestra
              capacidad de innovación y por ofrecer soluciones efectivas en el
              mantenimiento de equipos, redes y sistemas de seguridad,
              garantizando la satisfacción total de nuestros clientes.
            </p>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-brand-dark text-center mb-8">
            Valores Corporativos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-light to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <p className="text-brand-dark font-semibold">{value.title}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

