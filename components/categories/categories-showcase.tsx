'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Cpu, 
  Smartphone, 
  Gamepad2, 
  Glasses, 
  Brain, 
  Bot, 
  Watch,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    name: 'Computadoras',
    icon: Cpu,
    description: 'Procesadores cuánticos y sistemas de IA avanzada',
    subcategories: ['Laptops Cuánticas', 'PCs Holográficas', 'Servidores IA'],
    color: 'from-blue-500 to-cyan-400',
    bgImage: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 1247
  },
  {
    name: 'Móviles',
    icon: Smartphone,
    description: 'Comunicadores dimensionales y tablets neurales',
    subcategories: ['Smartphones Plegables', 'Tablets Neurales', 'Comunicadores'],
    color: 'from-purple-500 to-pink-400',
    bgImage: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 892
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    description: 'Consolas inmersivas y realidades alternativas',
    subcategories: ['Consolas Inmersivas', 'VR Gaming', 'Accesorios Hápticos'],
    color: 'from-green-500 to-emerald-400',
    bgImage: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 634
  },
  {
    name: 'Realidad Virtual',
    icon: Glasses,
    description: 'Universos paralelos y experiencias multidimensionales',
    subcategories: ['Cascos RV', 'Lentes AR', 'Guantes Hápticos'],
    color: 'from-orange-500 to-red-400',
    bgImage: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 456
  },
  {
    name: 'Inteligencia Artificial',
    icon: Brain,
    description: 'Consciencias artificiales y asistentes cuánticos',
    subcategories: ['Asistentes IA', 'Chips Neurales', 'Servidores IA'],
    color: 'from-indigo-500 to-purple-400',
    bgImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 789
  },
  {
    name: 'Robótica',
    icon: Bot,
    description: 'Androides domésticos y exoesqueletos',
    subcategories: ['Robots Domésticos', 'Drones IA', 'Exoesqueletos'],
    color: 'from-teal-500 to-cyan-400',
    bgImage: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 345
  },
  {
    name: 'Wearables',
    icon: Watch,
    description: 'Tecnología corporal y modificaciones biométricas',
    subcategories: ['Smartwatch Bio', 'Implantes', 'Ropa Inteligente'],
    color: 'from-pink-500 to-rose-400',
    bgImage: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 567
  }
];

export function CategoriesShowcase() {
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
              Explora el Universo Tecnológico
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Sumérgete en nuestras 7 dimensiones tecnológicas, cada una con sus propias maravillas 
            y avances revolucionarios que transformarán tu realidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={index === 0 ? 'md:col-span-2 lg:row-span-2' : ''}
            >
              <Link href={`/categoria/${category.name.toLowerCase()}`}>
                <Card className="glass border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden h-full group cursor-pointer">
                  <div className="relative">
                    <img
                      src={category.bgImage}
                      alt={category.name}
                      className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                        index === 0 ? 'h-48 lg:h-96' : 'h-32'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`} />
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className={`p-3 rounded-xl glass backdrop-blur-md bg-gradient-to-br ${category.color}`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Item Count */}
                    <div className="absolute top-4 right-4">
                      <div className="glass px-3 py-1 rounded-lg">
                        <span className="text-sm text-white font-semibold">
                          {category.itemCount.toLocaleString()} items
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className={`p-6 space-y-4 ${index === 0 ? 'lg:space-y-6' : ''}`}>
                    <div>
                      <h3 className={`font-orbitron font-bold text-white group-hover:text-cyan-400 transition-colors ${
                        index === 0 ? 'text-2xl lg:text-3xl mb-3' : 'text-xl mb-2'
                      }`}>
                        {category.name}
                      </h3>
                      <p className={`text-gray-300 ${index === 0 ? 'text-base lg:text-lg' : 'text-sm'}`}>
                        {category.description}
                      </p>
                    </div>

                    {/* Subcategories */}
                    <div className="space-y-2">
                      {category.subcategories.map((sub, subIndex) => (
                        <motion.div
                          key={sub}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (subIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3" />
                          {sub}
                        </motion.div>
                      ))}
                    </div>

                    {index === 0 && (
                      <Button 
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white mt-6"
                      >
                        Explorar Categoría
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Link>
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
            Ver Todas las Categorías
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}