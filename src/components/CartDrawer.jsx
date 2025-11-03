import React from 'react';
import { X, Plus, Minus, Trash, Check } from 'lucide-react';

export default function CartDrawer({ open, items, onClose, onIncrease, onDecrease, onRemove, onCheckout }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div aria-hidden={!open}>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-full sm:w-[420px] bg-[#0b0d10] border-l border-white/10 shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-white text-lg font-semibold">Your Cart</h3>
          <button aria-label="Close cart" onClick={onClose} className="p-2 rounded-md hover:bg-white/10">
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        <div className="p-4 space-y-3 max-h-[calc(100%-180px)] overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-white/70">Your cart is empty. Add something wild.</p>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex items-start gap-3 p-3 rounded-xl border border-white/10 bg-white/5">
                <div className="h-12 w-12 rounded-lg bg-white/10 grid place-items-center text-white/90">
                  <span className="text-sm font-semibold">{it.type[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-white font-medium truncate">{it.title}</h4>
                    <button onClick={() => onRemove(it.id)} className="p-1 rounded-md hover:bg-white/10">
                      <Trash className="h-4 w-4 text-white/70" />
                    </button>
                  </div>
                  <p className="text-xs text-white/60">{it.type}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button onClick={() => onDecrease(it.id)} className="p-1 rounded-md bg-white/10 hover:bg-white/20">
                        <Minus className="h-4 w-4 text-white" />
                      </button>
                      <span className="text-white/90 text-sm w-6 text-center">{it.qty}</span>
                      <button onClick={() => onIncrease(it.id)} className="p-1 rounded-md bg-white/10 hover:bg-white/20">
                        <Plus className="h-4 w-4 text-white" />
                      </button>
                    </div>
                    <span className="text-white font-semibold">${(it.price * it.qty).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-[#0b0d10]">
          <div className="flex items-center justify-between text-white mb-3">
            <span className="text-white/70">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 text-black font-semibold py-3 hover:bg-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Check className="h-5 w-5" />
            Checkout
          </button>
          <p className="mt-2 text-xs text-white/60">Instant download links delivered to your email after purchase.</p>
        </div>
      </aside>
    </div>
  );
}
