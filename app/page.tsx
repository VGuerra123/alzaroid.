import { AnimatedBackground } from '@/components/background/animated-background';
import { FuturisticNavbar } from '@/components/navigation/futuristic-navbar';
import { FuturisticHero } from '@/components/hero/futuristic-hero';
import { CategoriesShowcase } from '@/components/categories/categories-showcase';
import { FeaturedProducts } from '@/components/products/featured-products';
import { FuturisticFooter } from '@/components/footer/futuristic-footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <FuturisticNavbar />
        <FuturisticHero />
        <CategoriesShowcase />
        <FeaturedProducts />
        <FuturisticFooter />
      </div>
    </main>
  );
}