import React from 'react';
import { Star, BookOpen, Palette, PlayCircle } from 'lucide-react';

const productsData = [
  {
    id: 'savanna-masterclass',
    title: 'Savanna Photography Masterclass',
    type: 'Course',
    icon: PlayCircle,
    price: 59,
    rating: 4.8,
    description: 'Capture majestic wildlife with pro techniques and editing presets.',
    color: 'from-amber-400 to-orange-500',
    accent: 'bg-orange-500/20 text-orange-200',
  },
  {
    id: 'big-cat-lore',
    title: 'Big Cat Lore e‑Book',
    type: 'e‑Book',
    icon: BookOpen,
    price: 19,
    rating: 4.6,
    description: 'A beautifully illustrated journey through lion prides and cheetah clans.',
    color: 'from-rose-400 to-pink-500',
    accent: 'bg-rose-500/20 text-rose-200',
  },
  {
    id: 'avian-audio-pack',
    title: 'Avian Soundscapes Pack',
    type: 'Download',
    icon: Palette,
    price: 24,
    rating: 4.7,
    description: 'High‑fidelity bird calls and ambient loops for creators.',
    color: 'from-emerald-400 to-cyan-500',
    accent: 'bg-emerald-500/20 text-emerald-200',
  },
  {
    id: 'elephant-prints',
    title: 'Elephant Art Prints',
    type: 'Digital Art',
    icon: Palette,
    price: 29,
    rating: 4.9,
    description: 'Minimalist downloadable posters celebrating gentle giants.',
    color: 'from-indigo-400 to-violet-500',
    accent: 'bg-indigo-500/20 text-indigo-200',
  },
];

export default function ProductGrid({ onAdd }) {
  return (
    <section id="products" className="relative z-10 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Featured Digital Products</h2>
          <p className="mt-2 text-white/70">Curated tools for creators, learners, and wildlife lovers. Instant downloads and lifetime access.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsData.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />)
          )}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }) {
  const Icon = product.icon;
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/20 transition-colors">
      <div className={`h-32 w-full bg-gradient-to-br ${product.color} relative`}>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(60%_60%_at_30%_20%,white,transparent)]" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className={`text-xs px-2 py-1 rounded-full ${product.accent}`}>{product.type}</span>
          <div className="flex items-center gap-1 text-amber-300">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs text-amber-200/90">{product.rating}</span>
          </div>
        </div>
        <h3 className="mt-3 text-white font-medium leading-tight">{product.title}</h3>
        <p className="mt-1 text-sm text-white/70 line-clamp-2">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/90">
            <Icon className="h-5 w-5" />
            <span className="font-semibold">${product.price}</span>
          </div>
          <button
            onClick={() => onAdd(product)}
            className="rounded-full bg-emerald-400 text-black text-sm font-semibold px-4 py-2 hover:bg-emerald-300 active:scale-[0.98] transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
