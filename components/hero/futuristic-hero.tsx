'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sparkle,
  Bot,
} from 'lucide-react';
import Link from 'next/link';

type Product = {
  id: string;
  title: string;
  description: string;
  images: {
    edges: { node: { src: string; altText: string } }[];
  };
  variants: {
    edges: { node: { price: { amount: string; currencyCode: string } } }[];
  };
};

const images: string[] = [
  'https://d3okvk28mv0bs6.cloudfront.net/uploads/23b9a53d-ebb9-4c4d-8cfa-5370f5fe4f8a/original/Modyo-WEB-Banner-Pricipal-1792X49054051-51462_.webp',
  'https://d3okvk28mv0bs6.cloudfront.net/uploads/9ff7d649-9a41-4cac-9eb8-e49f37831391/original/Modyo-WEB-Banner-Pricipal-1792X49054014-54191.webp',
  'https://d3okvk28mv0bs6.cloudfront.net/uploads/d50ca9fb-1db9-4a24-b16b-80cc28cdc01b/original/Modyo-WEB-Banner-Principal-1792x490.webp',
  'https://d3okvk28mv0bs6.cloudfront.net/uploads/962aa386-0d72-41eb-a1a3-8f3bb599a636/original/Modyo-WEB-Banner-Pricipal-1792X49052549-52550-.webp',
];

interface Props {
  products: Product[];
}

export default function HeroYDestacados({ products }: Props) {
  const [slide, setSlide] = useState(0);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const iv = setInterval(() => setSlide((s) => (s + 1) % images.length), 5000);
    return () => clearInterval(iv);
  }, []);

  const toggleWishlist = (id: string) =>
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));

  const formatPrice = (price: string, currency: string) =>
    new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    }).format(parseFloat(price));

  return (
    <main className="relative min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-white space-y-20">
      {/* CAROUSEL */}
      <section className="mt-44 sm:mt-52 flex justify-center">
        <div
          ref={ref}
          className="
            relative w-[96vw] max-w-[1150px] h-[280px] sm:h-[340px] rounded-3xl overflow-hidden
            bg-white/20 backdrop-blur-lg border border-yellow-200/40
            shadow-[0_20px_48px_0_rgba(60,60,10,0.16),0_2px_20px_0_rgba(255,255,180,0.10)]
            flex items-center
          "
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={slide}
              src={images[slide]}
              alt={`Slide ${slide + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              draggable={false}
              style={{ filter: 'brightness(0.98) saturate(1.03)' }}
            />
          </AnimatePresence>

          {/* Navegadores */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSlide((s) => (s - 1 + images.length) % images.length)}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 backdrop-blur rounded-full shadow-xl border border-yellow-300"
            style={{ zIndex: 2 }}
          >
            <ChevronLeft className="w-7 h-7 text-yellow-900" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSlide((s) => (s + 1) % images.length)}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 backdrop-blur rounded-full shadow-xl border border-yellow-300"
            style={{ zIndex: 2 }}
          >
            <ChevronRight className="w-7 h-7 text-yellow-900" />
          </Button>

          {/* Puntos del carrusel */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`w-3 h-3 rounded-full border-2 transition-shadow ${
                  i === slide
                    ? 'bg-yellow-300 border-yellow-700 shadow-lg scale-110'
                    : 'bg-white/60 border-yellow-200 hover:scale-105'
                }`}
              />
            ))}
          </div>

          {/* Botón Ofertas (desktop) */}
          <Link href="/ofertas" className="absolute right-6 top-6 z-20 hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.04, rotate: -3 }}
              className="
                px-6 py-2 rounded-full flex items-center gap-2 font-bold
                bg-gradient-to-br from-[#fffbe0] via-[#d1b05f] to-[#ffe372]
                shadow-[0_1px_5px_0_rgba(160,140,60,0.12),inset_0_1.5px_12px_#fff9]
                border border-[#f3e0a8] text-yellow-900 uppercase tracking-wider text-lg
                transition-all duration-150 relative overflow-hidden
              "
              style={{
                boxShadow: '0 1px 7px 0 #c9a54770, 0 0.5px 0 #fff9',
                letterSpacing: '.06em',
              }}
            >
              <Sparkle className="w-5 h-5 text-yellow-700 drop-shadow" />
              Ofertas
              <span
                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                style={{
                  background:
                    'linear-gradient(120deg,rgba(255,255,255,0.07) 30%,rgba(255,255,255,0) 75%)',
                }}
              />
            </motion.button>
          </Link>
          {/* Botón Ofertas (mobile) */}
          <Link href="/ofertas" className="absolute bottom-6 right-6 z-20 sm:hidden">
            <motion.button
              whileHover={{ scale: 1.07, rotate: -3 }}
              className="
                px-4 py-2 rounded-full flex items-center gap-2 font-bold
                bg-gradient-to-br from-[#fffbe0] via-[#d1b05f] to-[#ffe372]
                shadow-[0_1px_5px_0_rgba(160,140,60,0.12),inset_0_1.5px_12px_#fff9]
                border border-[#f3e0a8] text-yellow-900 uppercase tracking-wider text-base
                transition-all duration-150 relative overflow-hidden
              "
            >
              <Sparkle className="w-4 h-4 text-yellow-700 drop-shadow" />
              Ofertas
            </motion.button>
          </Link>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="px-3 sm:px-6 lg:px-8">
        <div className="
            max-w-[1150px] mx-auto
            bg-white/15 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-yellow-200/40
          ">
          <div className="text-center mb-8">
            <h2 className="font-orbitron text-4xl sm:text-5xl font-black text-yellow-900 mb-2 drop-shadow">
              Productos Destacados
            </h2>
            <p className="text-lg text-yellow-900/70">
              Encuentra lo último en tecnología con máxima profundidad y estilo minimalista.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p, idx) => {
              const price = p.variants.edges[0]?.node.price.amount || '0';
              const currency = p.variants.edges[0]?.node.price.currencyCode || 'CLP';
              const image = p.images.edges[0]?.node.src;

              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ rotateY: 4, rotateX: 4, scale: 1.02 }}
                  style={{ perspective: 800 }}
                  className="group"
                >
                  <Card className="
                      bg-gradient-to-br from-[#fdf6e5] via-[#fffbea] to-[#ffe372]/80
                      text-yellow-900 rounded-xl overflow-hidden shadow-xl
                      border border-yellow-100/60
                      transition-shadow hover:shadow-[0_20px_40px_0_rgba(80,80,0,0.18)]
                    ">
                    <div className="relative">
                      <img
                        src={image}
                        alt={p.title}
                        className="w-full aspect-[4/3] object-cover rounded-t-xl"
                        draggable={false}
                        style={{ borderBottom: '1.5px solid #ffe38833' }}
                      />
                      <Badge className="absolute top-3 left-3 px-2 py-0.5 text-xs bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 text-yellow-900 shadow">
                        DESTACADO
                      </Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 text-yellow-900/80 hover:text-red-500 bg-white/50"
                        onClick={() => toggleWishlist(p.id)}
                      >
                        <Heart className={wishlist.includes(p.id) ? 'fill-red-500' : ''} />
                      </Button>
                    </div>
                    <CardContent className="p-4 space-y-1">
                      <Badge variant="outline" className="text-xs border-yellow-700 text-yellow-700/80">
                        Shopify
                      </Badge>
                      <h3 className="text-base font-bold">{p.title}</h3>
                      <div className="flex items-center text-sm text-yellow-900/80">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-700/30" />
                        ))}
                        <span className="ml-2 text-xs text-yellow-900/40">(sin rating)</span>
                      </div>
                      <div className="text-xs text-yellow-900/60 line-clamp-2">{p.description}</div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-xl font-black text-yellow-800">
                          {formatPrice(price, currency)}
                        </span>
                      </div>
                      <Button className="w-full mt-3 py-2 bg-gradient-to-r from-yellow-300 via-[#fffbea] to-[#ffe372]/90 text-yellow-900 font-black hover:from-yellow-400/90 hover:to-[#ffe372]/90 shadow border border-yellow-100">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Añadir
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTONES FLOTANTES */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-30">
        {/* WhatsApp Oficial */}
        <Link href="https://wa.me/15551234567" target="_blank">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-7 h-7"
            />
          </motion.button>
        </Link>
        {/* Asistente Virtual */}
        <Link href="/asistente-virtual">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            <Bot className="w-7 h-7 text-blue-500" />
          </motion.button>
        </Link>
      </div>
    </main>
  );
}
