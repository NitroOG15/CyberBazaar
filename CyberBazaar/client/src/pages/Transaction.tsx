import { Product } from '@/lib/products';
import { Link, useLocation } from 'wouter';

interface TransactionProps {
  product: Product;
  onAddToCart: () => void;
}

export default function Transaction({ product, onAddToCart }: TransactionProps) {
  const [, setLocation] = useLocation();

  const handleAddToCart = () => {
    onAddToCart();
    // Show a brief confirmation then redirect to cart
    setTimeout(() => {
      setLocation('/cart');
    }, 1000);
  };

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
              TRANSACTION DETAILS
            </h1>
            <Link href="/cart" className="text-cyber-pink hover:text-cyber-cyan transition-colors">
              VIEW CART
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover border border-cyber-cyan neon-border"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-cyber-red px-3 py-1 text-sm font-tech animate-pulse text-black font-bold">
                  RESTRICTED
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-orbitron font-black text-cyber-cyan mb-4">
                  {product.name}
                </h2>
                <div className="text-cyber-yellow font-orbitron font-bold text-4xl mb-6">
                  {product.price}
                </div>
              </div>

              <div className="border border-cyber-pink/30 p-4 neon-pink-border">
                <h3 className="text-cyber-pink font-tech text-sm mb-2">PRODUCT DESCRIPTION:</h3>
                <p className="text-white/90 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="border border-cyber-cyan/30 p-4 neon-border">
                <h3 className="text-cyber-cyan font-tech text-sm mb-2">NEURAL COMPATIBILITY:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.traits.map(trait => (
                    <span 
                      key={trait}
                      className="bg-cyber-cyan/20 text-cyber-cyan px-3 py-1 text-xs rounded border border-cyber-cyan/50"
                    >
                      {trait.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-cyber-pink/20 border-2 border-cyber-pink text-cyber-pink py-4 px-8 font-orbitron font-bold text-xl hover:bg-cyber-pink/40 transition-all duration-300 neon-pink-border"
                >
                  ADD TO CART
                </button>
                
                <div className="text-center">
                  <Link href="/cart">
                    <button className="w-full bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan py-3 px-6 font-tech hover:bg-cyber-cyan/40 transition-all neon-border">
                      PROCEED TO CHECKOUT
                    </button>
                  </Link>
                </div>
              </div>

              <div className="border-t border-cyber-red/50 pt-4 mt-6">
                <div className="text-cyber-red text-sm font-tech">
                  ⚠ WARNING: All neural modifications are IRREVERSIBLE<br />
                  ⚠ Corporate surveillance protocols will be triggered<br />
                  ⚠ Installation requires black market neural surgeon
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}