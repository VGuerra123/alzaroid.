// app/cart/page.tsx
'use client';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tu carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, i) => (
              <li key={i} className="bg-white/10 p-4 rounded-xl">
                <p className="font-semibold">{item.title}</p>
                <p>{item.variants?.edges[0]?.node?.price.amount} CLP</p>
                <button
                  className="text-red-400 mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}
