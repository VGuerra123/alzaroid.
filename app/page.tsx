// app/page.tsx
import { AnimatedBackground } from '@/components/background/animated-background';
import { FuturisticNavbar } from '@/components/navigation/futuristic-navbar';
import HeroYDestacados from '@/components/hero/futuristic-hero';
import { FuturisticFooter } from '@/components/footer/futuristic-footer';
import { fetchShopify } from '@/lib/shopify';
import { GET_PRODUCTS } from '@/lib/queries';

// Revalida cada 60 segundos automáticamente
export const revalidate = 60;

export default async function Home() {
  const data = await fetchShopify(GET_PRODUCTS);
  const products = data.products.edges.map((edge: any) => edge.node);

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10">
        <FuturisticNavbar />

        {/* Hero que incluye productos desde Shopify */}
        <HeroYDestacados products={products} />

        <FuturisticFooter />
      </div>
    </main>
  );
}
