'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, Eye, Star, Zap } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: "NeuroLink Pro X1",
    category: "Inteligencia Artificial",
    price: 49999,
    originalPrice: 69999,
    rating: 4.9,
    reviews: 2847,
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Conexión neural directa", "IA consciente nivel 9", "Capacidad cuántica"],
    badge: "NUEVO",
    badgeColor: "bg-purple-500"
  },
  {
    id: 2,
    name: "HoloPhone Infinity",
    category: "Móviles",
    price: 12999,
    originalPrice: 15999,
    rating: 4.8,
    reviews: 5632,
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Pantalla holográfica 3D", "Batería de antimateria", "Escudo de energía"],
    badge: "POPULAR",
    badgeColor: "bg-cyan-500"
  },
  {
    id: 3,
    name: "QuantumBook Ultra",
    category: "Computadoras",
    price: 89999,
    originalPrice: 119999,
    rating: 5.0,
    reviews: 1234,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    features: ["Procesador cuántico", "RAM dimensional", "Enfriamiento criogénico"],
    badge: "OFERTA",
    badgeColor: "bg-red-500"
  },
  {
    id: 4,
    name: "VR Universe Pro",
    category: "Realidad Virtual",
    price: 24999,
    originalPrice: 29999,
    rating: 4.7,
    reviews: 3421,
    image: "https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Inmersión total 360°", "Retroalimentación háptica", "Mundos infinitos"],
    badge: "LIMITADO",
    badgeColor: "bg-yellow-500"
  },
  {
    id: 5,
    name: "RoboButler Assistant",
    category: "Robótica",
    price: 156999,
    originalPrice: 199999,
    rating: 4.9,
    reviews: 876,
    image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["IA autónoma avanzada", "Mantenimiento automático", "Protocolo mayordomo"],
    badge: "PREMIUM",
    badgeColor: "bg-gold-500"
  },
  {
    id: 6,
    name: "TimeWatch Quantum",
    category: "Wearables",
    price: 7999,
    originalPrice: 9999,
    rating: 4.6,
    reviews: 4567,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Manipulación temporal", "Biometría avanzada", "Energía solar"],
    badge: "ECO",
    badgeColor: "bg-green-500"
  }
];

export function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Productos Destacados
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubre las últimas innovaciones tecnológicas que están redefiniendo el futuro. 
            Cada producto ha sido cuidadosamente seleccionado por nuestros expertos galácticos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden h-full">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Badge */}
                  <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white font-semibold`}>
                    {product.badge}
                  </Badge>

                  {/* Wishlist Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 glass hover:bg-white/20"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 transition-colors ${
                        wishlist.includes(product.id) 
                          ? 'text-red-500 fill-red-500' 
                          : 'text-white'
                      }`} 
                    />
                  </Button>

                  {/* Quick View */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="ghost" className="glass text-white hover:bg-white/20">
                      <Eye className="w-4 h-4 mr-2" />
                      Vista Rápida
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400/50 mb-2">
                      {product.category}
                    </Badge>
                    <h3 className="font-orbitron text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-green-400 font-semibold">
                        Ahorras {formatPrice(product.originalPrice - product.price)}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-4">
                    <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Añadir al Carrito
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            variant="outline"
            className="glass border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6"
          >
            Ver Todos los Productos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}