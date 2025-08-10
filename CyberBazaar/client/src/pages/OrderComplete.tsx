import { CartItem } from '@/lib/products';
import { Link } from 'wouter';

interface OrderCompleteProps {
  cart: CartItem[];
  orderNumber: string;
}

export default function OrderComplete({ cart, orderNumber }: OrderCompleteProps) {
  const totalValue = cart.reduce((sum, item) => sum + (item.product.priceValue * item.quantity), 0);
  const fees = 55000;
  const finalTotal = totalValue + fees;

  return (
    <div className="min-h-screen bg-black text-white font-tech scan-lines">
      <div className="fixed inset-0 bg-static opacity-5 pointer-events-none"></div>
      
      <header className="relative z-10 border-b border-cyber-cyan/30 bg-cyber-darker/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-orbitron font-black text-center text-cyber-cyan">
            TRANSACTION CONFIRMED
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-4xl font-orbitron font-black text-cyber-cyan mb-4 animate-flicker">
              ORDER CONFIRMED
            </div>
            <div className="text-cyber-yellow font-tech text-xl">
              Transaction ID: {orderNumber}
            </div>
          </div>

          <div className="border border-cyber-cyan/50 p-6 neon-border mb-8">
            <div className="mb-6">
              <h2 className="text-xl font-orbitron font-bold text-cyber-pink mb-4">
                NEURAL MODIFICATIONS ACQUIRED:
              </h2>
              
              <div className="space-y-3">
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center border-b border-cyber-cyan/20 pb-2">
                    <div>
                      <div className="text-cyber-cyan">{item.product.name}</div>
                      <div className="text-white/60 text-sm">Quantity: {item.quantity}</div>
                    </div>
                    <div className="text-cyber-yellow font-orbitron">
                      ¥{(item.product.priceValue * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-cyber-pink/50 pt-4 mt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-cyber-pink">TOTAL PAID:</span>
                  <span className="text-cyber-yellow font-orbitron">¥{finalTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-cyber-pink/50 p-4 neon-pink-border">
              <h3 className="text-cyber-pink font-tech text-sm mb-3">INSTALLATION SCHEDULE:</h3>
              <div className="text-white/90 text-sm space-y-1">
                <div>• Neural surgeon contact: 48 hours</div>
                <div>• Installation appointment: 3-5 days</div>
                <div>• Recovery period: 1-2 weeks</div>
                <div>• Full integration: 30 days</div>
              </div>
            </div>

            <div className="border border-cyber-cyan/50 p-4 neon-border">
              <h3 className="text-cyber-cyan font-tech text-sm mb-3">SECURITY MEASURES:</h3>
              <div className="text-white/90 text-sm space-y-1">
                <div>• Identity scrubbed from corporate databases</div>
                <div>• Neural signature encrypted</div>
                <div>• Installation location randomized</div>
                <div>• Emergency extraction protocol active</div>
              </div>
            </div>
          </div>

          <div className="border border-cyber-red/50 p-6 neon-red-border mb-8">
            <h3 className="text-cyber-red font-orbitron font-bold text-lg mb-3">
              CRITICAL INSTRUCTIONS:
            </h3>
            <div className="text-white/90 space-y-2">
              <div>1. Destroy all evidence of this transaction</div>
              <div>2. Avoid corporate districts for 72 hours</div>
              <div>3. Use only encrypted communication channels</div>
              <div>4. Trust no one - neural modifications change people</div>
              <div>5. Remember: once modified, there's no going back</div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <Link href="/">
              <button className="bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan px-8 py-3 font-tech hover:bg-cyber-cyan/40 transition-all neon-border mr-4">
                RETURN TO BAZAAR
              </button>
            </Link>
            
            <div className="text-cyber-cyan/70 text-sm">
              Welcome to your new reality.<br />
              <span className="text-cyber-red animate-pulse">You are no longer fully human.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}