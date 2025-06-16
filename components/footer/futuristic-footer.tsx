'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  MessageCircle, // simulamos WhatsApp
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

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
  { icon: SiTiktok, href: '#', label: 'TikTok' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

/* ---------- COMPONENT ---------- */
export function FuturisticFooter() {
  return (
    <footer className="relative mt-24 bg-[#f5f7fb] border-t border-blue-500/20">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* BRAND + CONTACTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Link href="/" className="inline-flex items-center group">
              <div className="relative w-40 h-12">
                <Image
                  src="/logos/mercart_bw.png"
                  alt="Mercart logo"
                  fill
                  priority
                  className="object-contain group-hover:opacity-90 transition"
                />
              </div>
            </Link>

            <p className="text-gray-500 leading-relaxed max-w-sm">
              Innovación global al alcance de tu mano
            </p>

            {/* Contacto */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-500">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Internacional</span>
              </div>

              <div className="flex items-center gap-3 text-gray-500">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <Link
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  +1&nbsp;(555)&nbsp;FUTURO - 1
                </Link>
              </div>

              <div className="flex items-center gap-3 text-gray-500">
                <Mail className="w-5 h-5 text-blue-400" />
                <Link
                  href="mailto:mercart.chile@gmail.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  mercart.chile@gmail.com
                </Link>
              </div>
            </div>

            {/* Redes */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.12 }}
                  className="
                    w-10 h-10 rounded-lg grid place-items-center
                    bg-white/50 backdrop-blur-md
                    ring-1 ring-white/30 hover:bg-blue-600/90
                    transition
                  "
                >
                  <Icon className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* LINKS */}
          {footerSections.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h4 className="font-orbitron text-lg font-semibold text-gray-900">
                {sec.title}
              </h4>
              <ul className="space-y-3">
                {sec.links.map((l, j) => (
                  <motion.li
                    key={l}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: j * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-blue-500 transition-colors flex items-center group"
                    >
                      {l}
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
      <div className="border-t border-blue-500/20 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <span className="text-gray-500">
              © 2025&nbsp;Mercart. Todos los derechos reservados.
            </span>
            <div className="flex gap-6">
              {['Política de Privacidad', 'Términos de Servicio', 'Cookies'].map(txt => (
                <Link
                  key={txt}
                  href="#"
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                >
                  {txt}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* EFECTO HOLOGRÁFICO SUAVE */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.08, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatDelay: 5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -skew-x-12" />
      </motion.div>
    </footer>
  );
}
