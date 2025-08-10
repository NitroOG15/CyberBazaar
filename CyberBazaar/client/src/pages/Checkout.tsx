import { CartItem } from '@/lib/products';
import { Link, useLocation } from 'wouter';
import { useState } from 'react';

interface CheckoutProps {
  cart: CartItem[];
  onPlaceOrder: () => void;
}

export default function Checkout({ cart, onPlaceOrder }: CheckoutProps) {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    alias: '',
    neuralId: '',
    district: '',
    encryption: 'military-grade',
    payment: 'crypto'
  });

  const totalValue = cart.reduce((sum, item) => sum + (item.product.priceValue * item.quantity), 0);
  const fees = 55000; // Installation + consultation + anonymity + insurance
  const finalTotal = totalValue + fees;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceOrder();
    setLocation('/order-complete');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-tech scan-lines">
      <div className="fixed inset-0 bg-static opacity-5 pointer-events-none"></div>
      
      <header className="relative z-10 border-b border-cyber-cyan/30 bg-cyber-darker/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cart" className="text-cyber-cyan hover:text-cyber-pink transition-colors">
              ← BACK TO CART
            </Link>
            <h1 className="text-2xl font-orbitron font-black text-cyber-cyan">
              SECURE CHECKOUT
            </h1>
            <div></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="space-y-6">
            <div className="border border-cyber-cyan/30 p-6 neon-border">
              <h2 className="text-xl font-orbitron font-bold text-cyber-cyan mb-6">
                NEURAL IDENTITY VERIFICATION
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-cyber-pink text-sm mb-2">OPERATIVE ALIAS:</label>
                  <input 
                    type="text"
                    name="alias"
                    value={formData.alias}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-darker border border-cyber-cyan/50 text-white p-3 focus:border-cyber-pink transition-colors"
                    placeholder="ChromeSpecter_001"
                    required
                  />
                </div>

                <div>
                  <label className="block text-cyber-pink text-sm mb-2">NEURAL ID:</label>
                  <input 
                    type="text"
                    name="neuralId"
                    value={formData.neuralId}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-darker border border-cyber-cyan/50 text-white p-3 focus:border-cyber-pink transition-colors"
                    placeholder="BMB-XXXX-XXXX-XXXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-cyber-pink text-sm mb-2">DISTRICT CODE:</label>
                  <input 
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-darker border border-cyber-cyan/50 text-white p-3 focus:border-cyber-pink transition-colors"
                    placeholder="SECTOR-7-UNDERGROUND"
                    required
                  />
                </div>

                <div>
                  <label className="block text-cyber-pink text-sm mb-2">ENCRYPTION LEVEL:</label>
                  <select 
                    name="encryption"
                    value={formData.encryption}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-darker border border-cyber-cyan/50 text-white p-3 focus:border-cyber-pink transition-colors"
                  >
                    <option value="basic">Basic (¥0)</option>
                    <option value="enhanced">Enhanced (+¥5,000)</option>
                    <option value="military-grade">Military Grade (+¥15,000)</option>
                    <option value="quantum">Quantum Level (+¥50,000)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-cyber-pink text-sm mb-2">PAYMENT METHOD:</label>
                  <select 
                    name="payment"
                    value={formData.payment}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-darker border border-cyber-cyan/50 text-white p-3 focus:border-cyber-pink transition-colors"
                  >
                    <option value="crypto">Cryptocurrency</option>
                    <option value="neural-credits">Neural Credits</option>
                    <option value="corporate-theft">Corporate Account Theft</option>
                    <option value="memory-trade">Memory Trade</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="border border-cyber-red/50 p-4 neon-red-border">
              <h3 className="text-cyber-red font-tech text-sm mb-2">SECURITY PROTOCOLS:</h3>
              <div className="text-white/70 text-xs space-y-1">
                <div>• All transmissions are quantum-encrypted</div>
                <div>• Neural signatures will be scrambled post-delivery</div>
                <div>• Corporate surveillance countermeasures active</div>
                <div>• Emergency memory wipe available upon request</div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="border border-cyber-pink/50 p-6 neon-pink-border">
              <h2 className="text-xl font-orbitron font-bold text-cyber-pink mb-6">
                ORDER SUMMARY
              </h2>

              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center border-b border-cyber-cyan/20 pb-2">
                    <div>
                      <div className="text-cyber-cyan text-sm">{item.product.name}</div>
                      <div className="text-white/60 text-xs">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-cyber-yellow font-orbitron">
                      ¥{(item.product.priceValue * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-cyber-cyan/30 pt-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span className="text-cyber-yellow">¥{totalValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Installation Fees:</span>
                  <span className="text-cyber-yellow">¥{fees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-cyber-pink/50 pt-2">
                  <span className="text-cyber-pink">TOTAL:</span>
                  <span className="text-cyber-yellow font-orbitron">¥{finalTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              className="w-full bg-cyber-red/20 border-2 border-cyber-red text-cyber-red py-4 px-8 font-orbitron font-bold text-xl hover:bg-cyber-red/40 transition-all duration-300 neon-red-border animate-pulse"
            >
              COMPLETE TRANSACTION
            </button>

            <div className="text-center text-cyber-cyan/70 text-xs">
              By proceeding, you acknowledge the irreversible nature of neural modifications<br />
              and waive all rights to corporate legal protection.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}