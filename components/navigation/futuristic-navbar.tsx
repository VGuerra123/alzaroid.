'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  LogIn,
  UserPlus,
  Cpu,
  Gamepad2,
  Server,
  Wifi,
  Home,
  Headphones,
  Grid,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const categories = [
  {
    name: 'Gaming y Streaming',
    icon: Gamepad2,
    subcategories: [
      'Productos Digitales',
      'Juegos Digitales',
      'Accesorios Gaming',
      'Streaming',
    ],
  },
  {
    name: 'Computación',
    icon: Cpu,
    subcategories: [
      'Notebooks',
      'PCs Armados',
      'All-in-One',
      'Tabletas',
      'Tabletas Gráficas',
      'Periféricos',
    ],
  },
  {
    name: 'Componentes',
    icon: Server,
    subcategories: [
      'Tarjetas de Video',
      'Procesadores',
      'Placas Madre',
      'Memorias RAM',
      'Almacenamiento',
      'Fuentes de Poder',
    ],
  },
  {
    name: 'Conectividad y Redes',
    icon: Wifi,
    subcategories: [
      'Routers',
      'Switches',
      'Cables de Red',
      'Tarjetas de Red',
      'Puntos de Acceso',
    ],
  },
  {
    name: 'Hogar y Oficina',
    icon: Home,
    subcategories: [
      'Impresoras',
      'Escáneres',
      'Muebles de Oficina',
      'Sillas',
      'Insumos de Oficina',
    ],
  },
  {
    name: 'Audio y Video',
    icon: Headphones,
    subcategories: ['Auriculares', 'Parlantes', 'Micrófonos', 'Televisores', 'Proyectores'],
  },
  {
    name: 'Otras Categorías',
    icon: Grid,
    subcategories: ['Juguetes y Juegos', 'Puntos de Venta', 'Selfie Sticks', 'Cargadores', 'Pilas'],
  },
  {
    name: 'Domótica',
    icon: Zap,
    subcategories: [
      'Iluminación Inteligente',
      'Cámaras de Seguridad',
      'Termostatos',
      'Enchufes Smart',
      'Sensores',
    ],
  },
];

export function FuturisticNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function getCircleColor(idx: number) {
    return [
      'bg-[var(--color-primary)]/10',
      'bg-[var(--color-accent)]/12',
      'bg-[var(--color-grey)]/12',
      'bg-[var(--color-accent)]/18',
    ][idx % 4];
  }

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-300
          border-b border-[var(--color-vellum)]/60
          shadow-[0_8px_32px_0_rgba(4,68,172,0.1)]
          backdrop-blur-3xl
          bg-[rgba(244,247,251,0.9)] dark:bg-[rgba(4,68,172,0.95)]
        `}
      >
        <div className="mx-auto flex h-[96px] max-w-7xl items-center px-4 md:px-6 xl:px-16 justify-between gap-4">
          {/* LOGO PREMIUM */}
          <Link href="/" className="flex items-center relative select-none">
            <motion.div
              initial={{ scale: 1.4, filter: 'brightness(1) drop-shadow(0 0 20px #39e5ff66)' }}
              whileHover={{
                scale: 1.3,
                filter: [
                  'brightness(1.2) drop-shadow(0 0 40px #41f9ffcc)',
                  'brightness(1.1) drop-shadow(0 0 28px #15d2ffd0)',
                ],
              }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="relative flex items-center justify-center w-[112px] h-[48px] z-20"
            >
              <Image
                src="/logos/logo.png"
                alt="Logo Mercart"
                width={112}
                height={48}
                priority
                className="object-contain border-l-inherit select-none"
                style={{
                  filter:
                    'drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #39e5ffcc) drop-shadow(0 0 5px #15d2ffd0)',
                }}
              />
              {/* FLARE LUMINOSO */}
              <motion.span
                initial={{ x: '-70%', opacity: 0.1 }}
                animate={{ x: ['-70%', '120%'], opacity: [0.1, 0.8, 0.1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-0 top-1/2 w-3/4 h-1/4 bg-gradient-to-r from-white/90 to-white/0 rounded-full blur-[12px] pointer-events-none"
              />
            </motion.div>
          </Link>

          {/* BUSCADOR */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:flex">
            <div className="relative w-full">
              <Input
                placeholder="Buscar tecnología del futuro…"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={`
                  bg-[rgba(255,255,255,0.2)] border-[var(--color-accent)]/50
                  pl-14 pr-4 text-[var(--color-primary)] font-medium
                  placeholder:text-[var(--color-accent)]/80
                  rounded-3xl shadow-lg focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]
                  h-14
                `}
                style={{ backdropFilter: 'blur(12px)' }}
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-[var(--color-accent)] pointer-events-none" />
            </div>
          </div>

          {/* ICONOS DERECHA */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="bg-[var(--color-vellum)]/70 hover:bg-[var(--color-accent)]/20 shadow-lg rounded-full">
              <Heart className="h-6 w-6 text-[var(--color-primary)]" />
            </Button>
            <Button variant="ghost" size="icon" className="relative bg-[var(--color-vellum)]/70 hover:bg-[var(--color-accent)]/20 shadow-lg rounded-full">
              <ShoppingCart className="h-6 w-6 text-[var(--color-primary)]" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-[var(--color-accent)] text-xs text-white border-2 border-white shadow-sm">
                  {cartItems}
                </Badge>
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-[var(--color-vellum)]/70 hover:bg-[var(--color-accent)]/20 shadow-lg rounded-full">
                  <User className="h-6 w-6 text-[var(--color-primary)]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-[rgba(4,68,172,0.95)] border-none shadow-2xl backdrop-blur-[16px]">
                {isLoggedIn ? (
                  <>
                    <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="transition transform hover:scale-105 hover:bg-[var(--color-accent)]/20">
                      <User className="mr-2 h-5 w-5" />Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem className="transition transform hover:scale-105 hover:bg-[var(--color-accent)]/20">
                      <Heart className="mr-2 h-5 w-5" />Lista de Deseos
                    </DropdownMenuItem>
                    <DropdownMenuItem className="transition transform hover:scale-105 hover:bg-[var(--color-accent)]/20">
                      <ShoppingCart className="mr-2 h-5 w-5" />Mis Pedidos
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      Cerrar Sesión
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem onClick={() => setIsLoggedIn(true)} className="transition transform hover:scale-105 hover:bg-[var(--color-accent)]/20">
                      <LogIn className="mr-2 h-5 w-5" />Iniciar Sesión
                    </DropdownMenuItem>
                    <DropdownMenuItem className="transition transform hover:scale-105 hover:bg-[var(--color-accent)]/20">
                      <UserPlus className="mr-2 h-5 w-5" />Registrarse
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="md:hidden bg-[var(--color-vellum)]/70 hover:bg-[var(--color-accent)]/20 shadow-lg rounded-full" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-[var(--color-primary)]" />
            </Button>
          </div>
        </div>

        {/* CATEGORÍAS DESKTOP */}
        <div className="border-t border-[var(--color-vellum)]/50 bg-[rgba(244,247,251,0.9)] dark:bg-[rgba(4,68,172,0.95)] hidden lg:block">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-4 py-3 justify-items-center">
              {categories.map((cat, idx) => (
                <DropdownMenu key={cat.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`
                        flex w-full items-center space-x-2 rounded-2xl
                        transition-shadow duration-150
                        hover:shadow-lg hover:bg-[var(--color-accent)]/25
                        text-[var(--color-grey)] px-4 py-2 border-none
                      `}
                    >
                      <span
                        className={`
                          flex items-center justify-center w-10 h-10 rounded-full
                          shadow-md ${getCircleColor(idx)}
                          group-hover:bg-[var(--color-accent)]/30 transition-colors
                        `}
                      >
                        <cat.icon className="w-6 h-6 text-[var(--color-accent)] group-hover:text-[var(--color-primary)]" />
                      </span>
                      <span className="font-semibold">{cat.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white dark:bg-[rgba(4,68,172,0.97)] shadow-2xl border-none backdrop-blur-[14px] min-w-[180px] py-2">
                    {cat.subcategories.map((sub) => (
                      <DropdownMenuItem
                        key={sub}
                        className="px-4 py-2 transition transform hover:scale-105 hover:bg-[var(--color-accent)]/25 hover:text-[var(--color-primary)]"
                      >
                        {sub}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MENÚ MOBILE */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.aside
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 22, stiffness: 180 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[var(--color-vellum)]/95 border-l border-[var(--color-accent)]/22 backdrop-blur-2xl p-6 space-y-6 overflow-y-auto md:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-orbitron text-xl text-[var(--color-accent)]">Menú</h2>
                <Button variant="ghost" size="icon" className="hover:bg-[var(--color-accent)]/20" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6 text-[var(--color-primary)]" />
                </Button>
              </div>
              <div className="relative">
                <Input
                  placeholder="Buscar…"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="bg-[rgba(240,245,255,0.15)] border-[var(--color-accent)]/50 pl-12 text-[var(--color-primary)] placeholder:text-[var(--color-accent)]/80 rounded-xl"
                  style={{ backdropFilter: 'blur(8px)' }}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-accent)]" />
              </div>
              <div className="space-y-2">
                {categories.map((cat, idx) => (
                  <details key={cat.name} className="group">
                    <summary className="flex cursor-pointer items-center space-x-3 rounded-lg p-3 transition-colors hover:bg-[var(--color-accent)]/20">
                      <span
                        className={`
                          flex items-center justify-center w-9 h-9 rounded-full
                          ${getCircleColor(idx)} transition-colors
                        `}
                      >
                        <cat.icon className="h-5 w-5 text-[var(--color-accent)]" />
                      </span>
                      <span className="font-semibold text-[var(--color-primary)]">{cat.name}</span>
                    </summary>
                    <div className="ml-8 mt-2 space-y-1">
                      {cat.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}/${sub
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                          className="block p-2 rounded-md transition transform hover:scale-105 hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-primary)]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
