import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JG Conextions - Soluciones Tecnológicas Integrales en Costa Rica",
  description: "Servicios de mantenimiento y reparación de computadoras, instalación de cámaras CCTV, redes, reparación de impresoras, mantenimiento de aires acondicionados y más. Ubicados en Heredia y Puriscal.",
  keywords: "reparación computadoras, mantenimiento equipos informáticos, cámaras CCTV, redes, reparación impresoras, aires acondicionados, Costa Rica, Heredia, Puriscal",
  authors: [{ name: "JG Conextions" }],
  creator: "JG Conextions",
  publisher: "JG Conextions",
  openGraph: {
    title: "JG Conextions - Soluciones Tecnológicas Integrales",
    description: "Servicios de mantenimiento y reparación de equipos tecnológicos, redes y sistemas de seguridad en Costa Rica",
    type: "website",
    locale: "es_CR",
    siteName: "JG Conextions",
  },
  twitter: {
    card: "summary_large_image",
    title: "JG Conextions - Soluciones Tecnológicas Integrales",
    description: "Servicios de mantenimiento y reparación de equipos tecnológicos en Costa Rica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agregar código de verificación cuando esté disponible
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

