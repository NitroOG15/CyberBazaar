import { useState } from 'react';
import { useLocation } from 'wouter';
import ProductCard from '@/components/ProductCard';
import TwistReveal from '@/components/TwistReveal';
import FinalTransaction from '@/components/FinalTransaction';
import { products } from '@/lib/products';
import { Product, CartItem } from '@/lib/products';
import { UserProfile } from '@/lib/profile';
import { ShoppingCart } from 'lucide-react';

type AppState = 'marketplace' | 'twist' | 'final';

interface BlackMarketBazaarProps {
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
}

export default function BlackMarketBazaar({ cart, onAddToCart }: BlackMarketBazaarProps) {
  const [, setLocation] = useLocation();
  const [appState, setAppState] = useState<AppState>('marketplace');
  const [userProfile, setUserProfile] = useState<UserProfile>({
    clickedItems: [],
    traits: {},
    totalClicks: 0
  });

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const trackClick = (product: Product) => {
    setUserProfile(prev => {
      const newProfile = {
        clickedItems: [...prev.clickedItems, product],
        traits: { ...prev.traits },
        totalClicks: prev.totalClicks + 1
      };

      // Add traits to profile
      product.traits.forEach(trait => {
        newProfile.traits[trait] = (newProfile.traits[trait] || 0) + 1;
      });

      return newProfile;
    });
  };

  const handleProductClick = (product: Product) => {
    if (product.isSpecial) {
      // Track click for profile building even for special item
      trackClick(product);
      // Trigger twist reveal after a short delay
      setTimeout(() => {
        setAppState('twist');
      }, 1000);
    } else {
      trackClick(product);
      // Navigate to transaction page for regular products
      setLocation(`/transaction/${product.id}`);
    }
  };

  const handleListOnMarket = () => {
    setAppState('final');
  };

  if (appState === 'twist') {
    return <TwistReveal profile={userProfile} onListOnMarket={handleListOnMarket} />;
  }

  if (appState === 'final') {
    return <FinalTransaction />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-tech scan-lines">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-static opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <header className="relative z-10 border-b border-cyber-cyan/30 bg-cyber-darker/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-start mb-4">
            <div></div>
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-6xl font-orbitron font-black relative glitch-text animate-flicker" data-text="BLACK MARKET BAZAAR">
                BLACK MARKET BAZAAR
              </h1>
            </div>
            <button 
              onClick={() => setLocation('/cart')}
              className="relative border border-cyber-cyan text-cyber-cyan p-3 hover:border-cyber-pink hover:text-cyber-pink transition-colors neon-border"
            >
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyber-red text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
          
          <p className="text-center text-cyber-cyan mt-2 font-tech tracking-wider">
            UNDERGROUND CYBERNETICS • NEURAL MODIFICATIONS • MEMORY IMPLANTS
          </p>
          <div className="text-center mt-4">
            <span className="inline-block px-4 py-1 bg-cyber-red/20 border border-cyber-red text-cyber-red text-sm font-tech tracking-wide animate-pulse">
              ⚠ ENCRYPTED CONNECTION REQUIRED ⚠
            </span>
          </div>
        </div>
      </header>

      {/* Main Product Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-orbitron font-bold text-cyber-pink mb-4">
            NEURAL ENHANCEMENT CATALOG
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-cyber-cyan">
            <span>ACTIVE LISTINGS: <span className="text-cyber-yellow">347</span></span>
            <span>•</span>
            <span>LAST UPDATE: <span className="text-cyber-yellow">2089.03.15</span></span>
            <span>•</span>
            <span>THREAT LEVEL: <span className="text-cyber-red animate-pulse">MAXIMUM</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={handleProductClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
