import { UserProfile } from '@/lib/profile';
import { generateCyberpunkAlias, generatePrice, generateProfileDescription, getTopTraits } from '@/lib/profile';

interface TwistRevealProps {
  profile: UserProfile;
  onListOnMarket: () => void;
}

export default function TwistReveal({ profile, onListOnMarket }: TwistRevealProps) {
  const alias = generateCyberpunkAlias();
  const price = generatePrice();
  const description = generateProfileDescription(profile);
  const topTraits = getTopTraits(profile);
  
  const clickedImages = profile.clickedItems.map(item => item.image).slice(0, 4);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center scan-lines">
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="animate-slide-glitch">
          <div className="mb-8">
            <h2 className="text-4xl font-orbitron font-black text-cyber-red mb-4 glitch-text" data-text="FINAL LISTING">
              FINAL LISTING
            </h2>
            <div className="text-cyber-cyan font-tech tracking-wider">
              PRODUCT CLASSIFICATION: HUMAN ASSET
            </div>
          </div>
          
          {/* Profile Card */}
          <div className="bg-cyber-darker border-2 border-cyber-pink neon-pink-border p-6 mb-6">
            <div className="mb-6">
              {clickedImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-1 w-32 h-32 mx-auto border border-cyber-cyan">
                  {clickedImages.map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`Profile component ${index + 1}`} 
                      className="w-full h-full object-cover opacity-60"
                    />
                  ))}
                </div>
              ) : (
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                  alt="Default profile" 
                  className="w-32 h-32 mx-auto border border-cyber-cyan object-cover opacity-60"
                />
              )}
            </div>
            
            <div className="text-left space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-cyber-cyan font-tech">DESIGNATION:</span>
                <span className="text-cyber-yellow font-orbitron font-bold">{alias}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyber-cyan font-tech">MARKET VALUE:</span>
                <span className="text-cyber-yellow font-orbitron font-bold">{price}</span>
              </div>
              <div className="border-t border-cyber-cyan/30 pt-4">
                <div className="text-cyber-cyan font-tech mb-2">BEHAVIORAL ANALYSIS:</div>
                <div className="text-white/90 text-sm">{description}</div>
              </div>
              
              {topTraits.length > 0 && (
                <div className="border-t border-cyber-cyan/30 pt-4">
                  <div className="text-cyber-cyan font-tech mb-2">COMPATIBILITY MATRIX:</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {topTraits.map(([trait, count]) => (
                      <span 
                        key={trait}
                        className="bg-cyber-pink/20 text-cyber-pink px-2 py-1 text-xs rounded border border-cyber-pink/50"
                      >
                        {trait.toUpperCase()}: {count}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <button 
            onClick={onListOnMarket}
            className="w-full bg-cyber-red/20 border-2 border-cyber-red text-cyber-red py-4 px-8 font-orbitron font-bold text-xl hover:bg-cyber-red/40 transition-all duration-300 neon-red-border animate-pulse"
          >
            LIST ON MARKET
          </button>
        </div>
      </div>
    </div>
  );
}
