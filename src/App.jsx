import React from 'react';
import Navbar from './components/Navbar';
import WildlifeScene from './components/WildlifeScene';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [checkedOut, setCheckedOut] = React.useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const increase = (id) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  const decrease = (id) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p)));
  const remove = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  const checkout = () => {
    setCheckedOut(true);
    setTimeout(() => {
      setCart([]);
      setCheckedOut(false);
      setCartOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1400);
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="min-h-screen bg-[#0a0c0f] selection:bg-emerald-400 selection:text-black">
      <WildlifeScene />

      <Navbar onCartOpen={() => setCartOpen(true)} cartCount={cartCount} />

      <main className="relative z-10 pt-28">
        <Hero onShop={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} checkedOut={checkedOut} />
        <ProductGrid onAdd={addToCart} />

        <section id="about" className="relative z-10 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-2xl font-semibold text-white">Crafted for creators who love the wild</h3>
              <p className="mt-2 text-white/70">We build premium digital products inspired by the rhythms of nature — from sound packs and e‑books to in‑depth courses. Every purchase supports wildlife conservation partners.</p>
            </div>
          </div>
        </section>

        <footer id="contact" className="relative z-10 py-10 text-center text-white/70">
          <p>© {new Date().getFullYear()} Savanna Digital. All rights reserved.</p>
        </footer>
      </main>

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onIncrease={increase}
        onDecrease={decrease}
        onRemove={remove}
        onCheckout={checkout}
      />
    </div>
  );
}

function Hero({ onShop, checkedOut }) {
  return (
    <section className="relative z-10 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            New: Avian Soundscapes Pack v2.0
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
            Digital products with the spirit of the savanna
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Learn, create, and explore with courses, e‑books, and downloadable art. Seamless checkout and instant delivery.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onShop} className="rounded-full bg-emerald-400 text-black font-semibold px-6 py-3 hover:bg-emerald-300 active:scale-[0.98] transition">
              Shop products
            </button>
            <a href="#about" className="rounded-full px-6 py-3 border border-white/20 text-white/90 hover:bg-white/10">
              Learn more
            </a>
            {checkedOut && (
              <span className="text-emerald-300/90">Thanks for your purchase! Check your email for downloads.</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
