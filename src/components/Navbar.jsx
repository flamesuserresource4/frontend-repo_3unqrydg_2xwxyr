import React from 'react';
import { ShoppingCart, Leaf, Menu } from 'lucide-react';

export default function Navbar({ onCartOpen, cartCount }) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-black/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 grid place-items-center shadow-lg">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-white/90">Savanna Digital</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Open cart"
              onClick={onCartOpen}
              className="relative inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-6 min-w-[1.5rem] px-1 rounded-full bg-emerald-400 text-black text-xs font-bold grid place-items-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="md:hidden p-2 rounded-md bg-white/10 hover:bg-white/20" onClick={() => setOpen((o) => !o)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4" onClick={() => setOpen(false)}>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
