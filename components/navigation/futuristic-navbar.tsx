'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Mic,
  ShoppingCart,
  User,
  Grid as GridIcon,
  Cpu,
  Gamepad2,
  Server,
  Wifi,
  Home,
  Headphones,
  Zap,
  X,
  ChevronRight,
  Sparkle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// --- Datos de categorías (completo)
const categories = [
  {
    name: 'Gaming y Streaming',
    icon: Gamepad2,
    sub: [
      'Productos Digitales',
      'Juegos Digitales',
      'Accesorios Gaming',
      'Streaming',
      'Tarjetas de regalo',
      'Monitores Gaming',
    ],
  },
  {
    name: 'Computación',
    icon: Cpu,
    sub: [
      'Notebooks',
      'PCs Armados',
      'All-in-One',
      'Tabletas',
      'Tabletas Gráficas',
      'Periféricos',
      'Monitores',
      'Sillas Gamer',
    ],
  },
  {
    name: 'Componentes',
    icon: Server,
    sub: [
      'Tarjetas de Video',
      'Procesadores',
      'Placas Madre',
      'Memorias RAM',
      'Almacenamiento',
      'Fuentes de Poder',
      'Coolers',
      'Gabinetes',
      'Ventiladores',
    ],
  },
  {
    name: 'Conectividad y Redes',
    icon: Wifi,
    sub: [
      'Routers',
      'Switches',
      'Cables de Red',
      'Tarjetas de Red',
      'Puntos de Acceso',
      'Wi-Fi Mesh',
      'Adaptadores Bluetooth',
    ],
  },
  {
    name: 'Hogar y Oficina',
    icon: Home,
    sub: [
      'Impresoras',
      'Escáneres',
      'Muebles de Oficina',
      'Sillas',
      'Insumos de Oficina',
      'Smart TVs',
      'Lámparas LED',
    ],
  },
  {
    name: 'Audio y Video',
    icon: Headphones,
    sub: [
      'Auriculares',
      'Parlantes',
      'Micrófonos',
      'Televisores',
      'Proyectores',
      'Soundbars',
      'Mixers',
      'Webcams',
    ],
  },
  {
    name: 'Otras Categorías',
    icon: GridIcon,
    sub: [
      'Juguetes y Juegos',
      'Puntos de Venta',
      'Selfie Sticks',
      'Cargadores',
      'Pilas',
      'Mochilas',
      'Adaptadores',
      'Accesorios Varios',
    ],
  },
  {
    name: 'Domótica',
    icon: Zap,
    sub: [
      'Iluminación Inteligente',
      'Cámaras',
      'Termostatos',
      'Enchufes Smart',
      'Sensores',
      'Controladores de Voz',
      'Aspiradoras Robot',
    ],
  },
];

// --- Sugerencias rápidas
const quickSuggestions = [
  'RTX 5090',
  'PlayStation 6',
  'MacBook Pro M4',
  'iPhone 16 Pro',
  'Teclado 60%',
  'Router Wi-Fi 7',
];

export function FuturisticNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Detectar móvil (<768px)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Bloqueo de scroll al abrir sidebar
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isSidebarOpen]);

  // Scroll para blur en nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleSidebar = useCallback(() => setIsSidebarOpen(o => !o), []);
  const handleCategoryClick = useCallback(
    (name: string) => setActiveCategory(prev => (prev === name ? null : name)),
    []
  );

  // Logo dinámico y tamaños
  const logoSrc = (isMobile || isSidebarOpen) ? '/logos/logo_.png' : '/logos/logo.png';
  const logoWidth = (isMobile || isSidebarOpen) ? 40 : 126;
  const logoHeight = (isMobile || isSidebarOpen) ? 40 : 38;

  // Estilos
  const glass = 'backdrop-blur-xl bg-white/30 ring-1 ring-[#ffe59c]/40 shadow-md transition-all';
  const iconColor = 'text-yellow-900/80';
  const accent = 'from-[#FFF9CD] via-[#FFE756] to-[#FFC800]';

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 130, damping: 20 }}
        className={`
          fixed inset-x-0 top-0 z-50 bg-gradient-to-b ${accent}
          ${scrolled ? 'shadow-lg bg-opacity-90 backdrop-blur-xl' : 'bg-opacity-100'}
        `}
        style={{ minHeight: '72px' }}
        aria-label="Barra de navegación principal"
      >
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center px-4 sm:px-6 gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logoSrc}
              alt="Mercart"
              width={logoWidth}
              height={logoHeight}
              priority
              className="transition-transform duration-200 hover:scale-105"
              style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.15))' }}
            />
          </Link>

          {/* Buscador */}
          <div className="flex flex-1 justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl flex items-center">
              <form
                className={`flex items-center w-full rounded-full ${glass} focus-within:ring-2 focus-within:ring-[#FFD500]/60`}
                onSubmit={e => e.preventDefault()}
              >
                <Input
                  ref={inputRef}
                  placeholder="Buscar tecnología del futuro…"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  className="flex-grow h-10 bg-transparent px-4 text-base placeholder-black/50 border-none focus:outline-none font-medium"
                  style={{ color: '#6b5527' }}
                  autoComplete="off"
                />
                <button type="submit" className="p-2 rounded-full hover:bg-white/40 transition">
                  <Search className="h-5 w-5 text-yellow-800" />
                </button>
                <button type="button" className="p-2 rounded-full hover:bg-white/40 transition">
                  <Mic className="h-5 w-5 text-yellow-800/60" />
                </button>
              </form>

              {/* Ofertas: solo md+ */}
              <Link href="/ofertas" className="ml-3 hidden md:flex">
                <button
                  className={`
                    px-4 py-2 rounded-full flex items-center gap-1.5 font-semibold
                    bg-gradient-to-br from-[#FFF9CD] via-[#FFE756] to-[#FFC800]
                    shadow-inner shadow-yellow-300/50
                    ring-1 ring-[#e6ce7e]
                    text-yellow-900 uppercase tracking-wide
                    hover:from-[#fff8d2] hover:to-[#fffacd]
                    transition-all duration-200
                  `}
                >
                  <Sparkle className="w-4 h-4" />
                  Ofertas
                </button>
              </Link>
            </div>

            {/* Sugerencias */}
            <AnimatePresence>
              {showSuggestions && !searchValue && (
                <motion.ul
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[90%] max-w-md bg-white rounded-xl shadow-lg ring-1 ring-[#e6ce7e] overflow-hidden"
                >
                  {quickSuggestions.map(s => (
                    <li key={s}>
                      <button
                        type="button"
                        onMouseDown={() => { setSearchValue(s); inputRef.current?.focus(); }}
                        className="block w-full px-4 py-2 text-left text-sm text-yellow-900 hover:bg-[#FFF9CD]/80 transition"
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className={`${glass} rounded-full hover:scale-110`}
              aria-label="Menú de categorías"
            >
              <GridIcon className={`h-6 w-6 ${iconColor}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`${glass} relative rounded-full hover:scale-110`}
              aria-label="Carrito"
            >
              <ShoppingCart className={`h-6 w-6 ${iconColor}`} />
              {cartItems > 0 && (
                <Badge className="absolute -top-1 -right-1 animate-pulse bg-black text-white text-xs border-2 border-white">
                  {cartItems}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`${glass} rounded-full hover:scale-110`}
              aria-label="Cuenta"
            >
              <User className={`h-6 w-6 ${iconColor}`} />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* SIDEBAR DE CATEGORÍAS */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Desktop / Tablet */}
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="hidden md:flex fixed left-0 top-[72px] bottom-0 z-50 w-80 flex-col overflow-y-auto bg-gradient-to-b from-[#FFF9CD] via-[#FFE756] to-[#FFC800] shadow-2xl ring-1 ring-yellow-200"
              style={{ borderTopRightRadius: '1.5rem', borderBottomRightRadius: '1.5rem' }}
              aria-label="Menú de categorías"
            >
              <div className="flex items-center justify-between h-20 px-6">
                <h2 className="text-2xl font-bold text-yellow-900">Categorías</h2>
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                  <X className="h-6 w-6 text-yellow-800" />
                </Button>
              </div>
              <nav className="px-4 pb-6 space-y-2">
                {categories.map(cat => {
                  const isActive = activeCategory === cat.name;
                  const Icon = cat.icon;
                  return (
                    <div key={cat.name}>
                      <button
                        onClick={() => handleCategoryClick(cat.name)}
                        className={`
                          flex w-full items-center gap-3 px-4 py-3 rounded-lg transition
                          ${isActive
                            ? 'bg-white shadow-md ring-1 ring-yellow-200'
                            : 'hover:bg-white/90'}
                        `}
                      >
                        <Icon className="h-5 w-5 text-yellow-900" />
                        <span className="flex-1 font-medium text-yellow-900">{cat.name}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isActive && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-8 mt-2 space-y-1"
                          >
                            {cat.sub.map(sub => (
                              <li key={sub}>
                                <Link
                                  href={`/${encodeURIComponent(cat.name)}/${encodeURIComponent(sub)}`}
                                  className="flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium text-yellow-900 hover:bg-yellow-100"
                                >
                                  <ChevronRight className="h-4 w-4 text-yellow-700" />
                                  {sub}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
            </motion.aside>

            {/* Mobile */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 130, damping: 22 }}
              className="md:hidden fixed left-0 top-[72px] bottom-0 z-50 w-80 bg-gradient-to-b from-[#FFF9CD] via-[#FFE756] to-[#FFC800] shadow-2xl ring-1 ring-yellow-200 p-5 overflow-y-auto"
              style={{ borderTopRightRadius: '1.5rem', borderBottomRightRadius: '1.5rem' }}
              aria-label="Menú móvil de categorías"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-yellow-900">Categorías</h2>
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                  <X className="h-6 w-6 text-yellow-800" />
                </Button>
              </div>
              <nav className="space-y-2">
                {categories.map(cat => {
                  const isActive = activeCategory === cat.name;
                  const Icon = cat.icon;
                  return (
                    <div key={cat.name}>
                      <button
                        onClick={() => handleCategoryClick(cat.name)}
                        className={`
                          flex w-full items-center gap-3 px-4 py-3 rounded-lg transition
                          ${isActive
                            ? 'bg-white shadow-md ring-1 ring-yellow-200'
                            : 'hover:bg-white/90'}
                        `}
                      >
                        <Icon className="h-5 w-5 text-yellow-900" />
                        <span className="flex-1 font-medium text-yellow-900">{cat.name}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                      </button>
                      {isActive && (
                        <ul className="pl-8 mt-2 space-y-1">
                          {cat.sub.map(sub => (
                            <li key={sub}>
                              <Link
                                href={`/${encodeURIComponent(cat.name)}/${encodeURIComponent(sub)}`}
                                onClick={toggleSidebar}
                                className="flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium text-yellow-900 hover:bg-yellow-100"
                              >
                                <ChevronRight className="h-4 w-4 text-yellow-700" />
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </nav>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="fixed inset-0 bg-black/80 z-40"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
