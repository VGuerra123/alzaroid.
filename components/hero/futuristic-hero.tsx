'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Rocket, Star } from 'lucide-react';

export function FuturisticHero() {
  const [currentText, setCurrentText] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  const heroTexts = [
    "Bienvenido al Futuro",
    "Tecnología del Año 3000",
    "Innovación Sin Límites",
    "El Mañana es Hoy"
  ];

  useEffect(() => {
    setIsClient(true);
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating Elements */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Animated Title */}
          <div className="space-y-4">
            <motion.h1
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent neon-text">
                {heroTexts[currentText]}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Explora la colección más avanzada de tecnología del universo. 
              Desde computadoras cuánticas hasta inteligencia artificial consciente, 
              todo lo que necesitas para conquistar el futuro está aquí.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="glass glow-border bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-6 text-lg group"
            >
              Explorar Catálogo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg"
            >
              Ver Ofertas Especiales
              <Zap className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                icon: Shield,
                title: "Garantía Cuántica",
                description: "Protección garantizada por 1000 años galácticos"
              },
              {
                icon: Rocket,
                title: "Envío Instantáneo",
                description: "Teletransportación directa a tu ubicación"
              },
              {
                icon: Star,
                title: "Calidad Estelar",
                description: "Certificado por la Federación Galáctica"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-orbitron text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Holographic Scanner Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform -skew-x-12" />
      </motion.div>
    </section>
  );
}