'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  MessageCircle,  // simulamos WhatsApp
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from 'lucide-react';
import { SiTiktok } from 'react-icons/si';     // ← nuevo icono TikTok

/* ---------- DATA ---------- */
const footerSections = [
  {
    title: 'Categorías',
    links: [
      'Gaming y Streaming',
      'Computación',
      'Componentes',
      'Conectividad y Redes',
      'Hogar y Oficina',
      'Audio y Video',
      'Otras Categorías',
      'Domótica',
    ],
  },
  {
    title: 'Servicio al Cliente',
    links: [
      'Centro de Ayuda',
      'Soporte Técnico',
      'Garantías',
      'Devoluciones',
      'Envíos',
      'Estado del Pedido',
      'Contacto',
    ],
  },
  {
    title: 'Empresa',
    links: [
      'Sobre Mercart',
      'Nuestro Propósito',
      'Carreras',
      'Noticias',
      'Inversionistas',
      'Sostenibilidad',
      'Colaboraciones',
    ],
  },
  {
    title: 'Legal',
    links: [
      'Términos de Uso',
      'Política de Privacidad',
      'Cookies',
      'Propiedad Intelectual',
      'Código de Conducta',
      'Cumplimiento',
      'Ética IA',
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: SiTiktok, href: '#', label: 'TikTok' },   // ← actual
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

/* ---------- COMPONENT ---------- */
export function FuturisticFooter() {
  return (
    <footer className="relative mt-20 glass border-t border-cyan-500/20">
      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* BRAND + CONTACTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Link href="/" className="flex items-center group">
              <motion.div
                className="relative w-36 h-10"
              >
                <Image
                  src="/logos/mercart_bw.png"
                  alt="Mercart logo"
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              Innovación global al alcance de tu mano
            </p>

            {/* DATOS DE CONTACTO */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Internacional</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <Link
                  href="https://wa.me/15551234567"        // cámbialo cuando tengas el Nº real
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +1&nbsp;(555)&nbsp;FUTURO-1
                </Link>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <Link
                  href="mailto:mercart.chile@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  mercart.chile@gmail.com
                </Link>
              </div>
            </div>

            {/* REDES SOCIALES */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 glass hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* LISTAS DE ENLACES */}
          {footerSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-orbitron text-lg font-semibold text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 + j * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      {link}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-sm text-gray-400">
              © 2025 Mercart. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* EFECTO HOLOGRÁFICO */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatDelay: 4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform -skew-x-12" />
      </motion.div>
    </footer>
  );
}
