'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerSections = [
  {
    title: 'Categorías',
    links: [
      'Computadoras Cuánticas',
      'Móviles del Futuro',
      'Gaming Inmersivo',
      'Realidad Virtual',
      'Inteligencia Artificial',
      'Robótica Avanzada',
      'Tecnología Wearable'
    ]
  },
  {
    title: 'Servicio al Cliente',
    links: [
      'Centro de Ayuda',
      'Soporte Técnico',
      'Garantías',
      'Devoluciones',
      'Envíos Galácticos',
      'Estado del Pedido',
      'Contacto'
    ]
  },
  {
    title: 'Empresa',
    links: [
      'Sobre TechVerse',
      'Misión Galáctica',
      'Carreras',
      'Noticias',
      'Inversionistas',
      'Sostenibilidad',
      'Colaboraciones'
    ]
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
      'Ética IA'
    ]
  }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

export function FuturisticFooter() {
  return (
    <footer className="relative mt-20 glass border-t border-cyan-500/20">
      {/* Newsletter Section */}
      <div className="border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Únete a la Revolución Tecnológica
              </span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Recibe las últimas noticias sobre innovaciones del futuro, ofertas exclusivas 
              y lanzamientos de productos directamente en tu comunicador neural.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu.email@futuro.com"
                className="glass border-cyan-500/30 focus:border-cyan-400 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white">
                <Zap className="w-4 h-4 mr-2" />
                Suscribirse
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center"
              >
                <Cpu className="w-6 h-6 text-white" />
              </motion.div>
              <span className="font-orbitron text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                TechVerse 3000
              </span>
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              Pioneros en tecnología del futuro, conectando la humanidad con las innovaciones 
              más avanzadas del universo conocido. Tu portal hacia el mañana.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Estación Espacial Alpha-7, Sector Galáctico 3000</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (555) FUTURO-1</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>contacto@techverse3000.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 glass hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-orbitron text-lg font-semibold text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
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

      {/* Bottom Bar */}
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
              © 3000 TechVerse 3000. Todos los derechos reservados en todas las dimensiones.
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

      {/* Holographic Scanner Effect */}
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