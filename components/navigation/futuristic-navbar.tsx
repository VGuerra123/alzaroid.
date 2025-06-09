'use client';

import { useState, useEffect } from 'react';
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
  Smartphone,
  Gamepad2,
  Glasses,
  Brain,
  Bot,
  Watch
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
    name: 'Computadoras',
    icon: Cpu,
    subcategories: ['Laptops Cuánticas', 'PCs Holográficas', 'Servidores IA']
  },
  {
    name: 'Móviles',
    icon: Smartphone,
    subcategories: ['Smartphones Plegables', 'Tablets Neurales', 'Comunicadores']
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    subcategories: ['Consolas Inmersivas', 'VR Gaming', 'Accesorios Hápticos']
  },
  {
    name: 'Realidad Virtual',
    icon: Glasses,
    subcategories: ['Cascos RV', 'Lentes AR', 'Guantes Hápticos']
  },
  {
    name: 'Inteligencia Artificial',
    icon: Brain,
    subcategories: ['Asistentes IA', 'Chips Neurales', 'Servidores IA']
  },
  {
    name: 'Robótica',
    icon: Bot,
    subcategories: ['Robots Domésticos', 'Drones IA', 'Exoesqueletos']
  },
  {
    name: 'Wearables',
    icon: Watch,
    subcategories: ['Smartwatch Bio', 'Implantes', 'Ropa Inteligente']
  }
];

export function FuturisticNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-dark shadow-lg shadow-cyan-500/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center"
              >
                <Cpu className="w-5 h-5 text-white" />
              </motion.div>
              <span className="font-orbitron text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                TechVerse 3000
              </span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Buscar tecnología del futuro..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="glass border-cyan-500/30 focus:border-cyan-400 pl-10 pr-4 text-white placeholder:text-gray-400"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="glass hover:bg-white/10 relative">
                <Heart className="w-5 h-5 text-cyan-400" />
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="icon" className="glass hover:bg-white/10 relative">
                <ShoppingCart className="w-5 h-5 text-cyan-400" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="glass hover:bg-white/10">
                    <User className="w-5 h-5 text-cyan-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass border-cyan-500/30 text-white">
                  {isLoggedIn ? (
                    <>
                      <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <User className="w-4 h-4 mr-2" />
                        Perfil
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Heart className="w-4 h-4 mr-2" />
                        Lista de Deseos
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Mis Pedidos
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                        Cerrar Sesión
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem onClick={() => setIsLoggedIn(true)}>
                        <LogIn className="w-4 h-4 mr-2" />
                        Iniciar Sesión
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <UserPlus className="w-4 h-4 mr-2" />
                        Registrarse
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden glass hover:bg-white/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-cyan-400" />
                ) : (
                  <Menu className="w-5 h-5 text-cyan-400" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="hidden lg:block border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8 py-3">
              {categories.map((category, index) => (
                <DropdownMenu key={category.name}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="flex items-center space-x-2 text-cyan-400 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                    >
                      <category.icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="glass border-cyan-500/30 text-white">
                    {category.subcategories.map((sub) => (
                      <DropdownMenuItem key={sub} className="hover:bg-white/10">
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm glass-dark md:hidden"
          >
            <div className="flex flex-col h-full p-6 space-y-6">
              {/* Search */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="glass border-cyan-500/30 focus:border-cyan-400 pl-10 text-white placeholder:text-gray-400"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <h3 className="font-orbitron text-lg font-semibold text-cyan-400 mb-4">
                  Categorías
                </h3>
                {categories.map((category) => (
                  <details key={category.name} className="group">
                    <summary className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer list-none">
                      <category.icon className="w-5 h-5 text-cyan-400" />
                      <span className="text-white font-medium">{category.name}</span>
                    </summary>
                    <div className="ml-8 mt-2 space-y-2">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href={`/category/${category.name.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block p-2 text-gray-300 hover:text-cyan-400 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}