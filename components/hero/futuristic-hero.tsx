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
} from 'lucide-react';

type Product = {
  id: string;
  title: string;
  description: string;
  images: {
    edges: {
      node: {
        src: string;
        altText: string;
      };
    }[];
  };
  variants: {
    edges: {
      node: {
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
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
    <main className="space-y-20">
      {/* CAROUSEL */}
      <section className="mt-56 flex justify-center">
        <div
          ref={ref}
          className="relative w-[90vw] max-w-screen-lg h-[360px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-turquesa/30 bg-gradient-to-br from-blue-700 to-blue-800"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={slide}
              src={images[slide]}
              alt={`Slide ${slide + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              draggable={false}
            />
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSlide((s) => (s - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSlide((s) => (s + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`w-3 h-3 rounded-full border-2 transition ${
                  i === slide
                    ? 'bg-white border-turquesa shadow'
                    : 'bg-white/50 border-white/70 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h2 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-2">
              Productos Destacados
            </h2>
            <p className="text-lg text-white/80">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ rotateY: 4, rotateX: 4, scale: 1.02 }}
                  style={{ perspective: 800 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-xl overflow-hidden shadow-xl transition-shadow hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                    <div className="relative">
                      <img
                        src={image}
                        alt={p.title}
                        className="w-full aspect-[4/3] object-cover"
                        draggable={false}
                      />
                      <Badge className="absolute top-3 left-3 px-2 py-0.5 text-xs bg-turquesa text-white">
                        DESTACADO
                      </Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 text-white/90 hover:text-red-400"
                        onClick={() => toggleWishlist(p.id)}
                      >
                        <Heart className={`${wishlist.includes(p.id) ? 'fill-red-500' : ''}`} />
                      </Button>
                    </div>
                    <CardContent className="p-4 space-y-1">
                      <Badge variant="outline" className="text-xs border-white text-white/70">
                        Shopify
                      </Badge>
                      <h3 className="text-base font-semibold">{p.title}</h3>
                      <div className="flex items-center text-sm text-white/90">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-white/50" />
                        ))}
                        <span className="ml-2 text-sm text-white/50"> (sin rating)</span>
                      </div>
                      <div className="text-sm text-white/80 line-clamp-2">{p.description}</div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl font-bold">
                          {formatPrice(price, currency)}
                        </span>
                      </div>
                      <Button className="w-full mt-3 py-2 bg-gradient-to-r from-turquesa to-deepblue text-white font-bold hover:from-turquesa/90 hover:to-deepblue/90">
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
    </main>
  );
}
