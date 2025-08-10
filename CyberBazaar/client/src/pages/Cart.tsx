import { CartItem } from '@/lib/products';
import { Link } from 'wouter';
import { Trash2 } from 'lucide-react';

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
}

export default function Cart({ cart, onUpdateQuantity, onRemoveFromCart }: CartProps) {
  const totalValue = cart.reduce((sum, item) => sum + (item.product.priceValue * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white font-tech scan-lines">
        <div className="fixed inset-0 bg-static opacity-5 pointer-events-none"></div>
        
        <header className="relative z-10 border-b border-cyber-cyan/30 bg-cyber-darker/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-cyber-cyan hover:text-cyber-pink transition-colors">
                ← BACK TO BAZAAR
              </Link>
              <h1 className="text-2xl font-orbitron font-black text-cyber-cyan">
                NEURAL CART
              </h1>
              <div></div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="border border-cyber-cyan/30 p-8 neon-border">
              <h2 className="text-xl font-orbitron font-bold text-cyber-cyan mb-4">
                CART EMPTY
              </h2>
              <p className="text-white/70 mb-6">
                No neural modifications selected. Browse our underground catalog to enhance your consciousness.
              </p>
              <Link href="/">
                <button className="bg-cyber-pink/20 border border-cyber-pink text-cyber-pink px-6 py-3 font-tech hover:bg-cyber-pink/40 transition-all neon-pink-border">
                  BROWSE CATALOG
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-tech scan-lines">
      <div className="fixed inset-0 bg-static opacity-5 pointer-events-none"></div>
      
      <header className="relative z-10 border-b border-cyber-cyan/30 bg-cyber-darker/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-cyber-cyan hover:text-cyber-pink transition-colors">
              ← BACK TO BAZAAR
            </Link>
            <h1 className="text-2xl font-orbitron font-black text-cyber-cyan">
              NEURAL CART ({totalItems})
            </h1>
            <div></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Cart Items */}
          <div className="space-y-4 mb-8">
            {cart.map(item => (
              <div key={item.product.id} className="border border-cyber-cyan/30 p-4 neon-border bg-cyber-darker/50">
                <div className="flex items-center gap-4">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-20 h-20 object-cover border border-cyber-pink/50"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-orbitron font-bold text-cyber-cyan mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-2">
                      {item.product.description}
                    </p>
                    <div className="text-cyber-yellow font-orbitron font-bold">
                      {item.product.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/20 transition-all text-lg"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-cyber-yellow">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/20 transition-all text-lg"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => onRemoveFromCart(item.product.id)}
                      className="text-cyber-red hover:text-cyber-pink transition-colors p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="border border-cyber-pink/50 p-6 neon-pink-border bg-cyber-darker/70">
            <div className="flex justify-between items-center mb-4">
              <span className="text-cyber-pink font-tech">TOTAL VALUE:</span>
              <span className="text-cyber-yellow font-orbitron font-bold text-2xl">
                ¥{totalValue.toLocaleString()}
              </span>
            </div>
            
            <div className="border-t border-cyber-cyan/30 pt-4 mb-6">
              <div className="text-cyber-cyan text-sm space-y-1">
                <div>• Neural installation fee: ¥5,000 per modification</div>
                <div>• Black market surgeon consultation: ¥15,000</div>
                <div>• Corporate anonymity package: ¥25,000</div>
                <div>• Emergency extraction insurance: ¥10,000</div>
              </div>
            </div>

            <Link href="/checkout">
              <button className="w-full bg-cyber-red/20 border-2 border-cyber-red text-cyber-red py-4 px-8 font-orbitron font-bold text-xl hover:bg-cyber-red/40 transition-all duration-300 neon-red-border animate-pulse">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}