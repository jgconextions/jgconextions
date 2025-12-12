'use client';

import { motion } from 'framer-motion';
import {
  Computer,
  ShoppingCart,
  Wind,
  Printer,
  Camera,
  Network,
} from 'lucide-react';

const services = [
  {
    icon: Computer,
    title: 'Mantenimiento y Reparación de Computadoras',
    description:
      'Realizamos mantenimiento preventivo y correctivo de equipos de computación, asegurando su óptimo rendimiento. Esto incluye limpieza interna, instalación de software, reparación de hardware y más.',
  },
  {
    icon: ShoppingCart,
    title: 'Venta de Equipos Tecnológicos',
    description:
      'Venta de equipos nuevos y reacondicionados, incluyendo computadoras, servidores, impresoras, cámaras de seguridad y otros dispositivos electrónicos. Ofrecemos asesoría personalizada para la elección de los equipos adecuados.',
  },
  {
    icon: Wind,
    title: 'Mantenimiento de Aires Acondicionados',
    description:
      'Ofrecemos mantenimiento preventivo y correctivo de sistemas de aire acondicionado. Realizamos limpieza de filtros, revisión de circuitos y reparación de unidades, asegurando un rendimiento eficiente y prolongado.',
  },
  {
    icon: Printer,
    title: 'Reparación de Impresoras',
    description:
      'Reparamos impresoras de diversas marcas y modelos, tanto en el hogar como en empresas. Nuestro servicio incluye limpieza, diagnóstico de fallos, reemplazo de piezas y ajustes para garantizar su correcto funcionamiento.',
  },
  {
    icon: Camera,
    title: 'Instalación y Mantenimiento de Cámaras CCTV',
    description:
      'Proporcionamos la instalación de cámaras de seguridad, configurando sistemas de monitoreo a distancia y garantizando la protección de instalaciones. Además, ofrecemos mantenimiento continuo para asegurar el funcionamiento constante.',
  },
  {
    icon: Network,
    title: 'Redes y Soluciones de Conectividad',
    description:
      'Instalación y mantenimiento de redes de datos, cableado estructurado, configuración de routers, switches y servidores. Garantizamos una infraestructura robusta y segura para una conexión estable y eficiente.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-light to-brand-accent mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones tecnológicas integrales adaptadas a las necesidades de
            cada cliente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-light to-brand-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

