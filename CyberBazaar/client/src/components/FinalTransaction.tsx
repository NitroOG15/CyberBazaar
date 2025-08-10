export default function FinalTransaction() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center scan-lines">
      <div className="max-w-lg mx-auto p-8 text-center animate-slide-glitch">
        <div className="mb-8">
          <h3 className="text-3xl font-orbitron font-black text-cyber-cyan mb-4">
            TRANSACTION COMPLETE
          </h3>
        </div>
        
        <div className="bg-cyber-darker border border-cyber-cyan/50 p-6 mb-6 neon-border">
          <div className="mb-4">
            <div className="text-cyber-cyan font-tech text-sm mb-2">BUYER PROFILE:</div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
              alt="Mysterious buyer profile" 
              className="w-16 h-16 rounded-full mx-auto mb-2 border border-cyber-cyan opacity-80"
            />
            <div className="text-cyber-yellow font-orbitron font-bold">
              SHADOWCORP_EXEC_001
            </div>
            <div className="text-cyber-cyan text-sm">
              BUYER RATING: ★★★★★ (2,847 acquisitions)
            </div>
          </div>
          
          <div className="border-t border-cyber-cyan/30 pt-4 mb-4">
            <div className="text-cyber-cyan font-tech text-sm mb-2">SHIPMENT TRACKING:</div>
            <div className="text-cyber-yellow font-tech text-lg">
              #BMB-2089-HUMAN-{Math.floor(Math.random() * 9999)}
            </div>
            <div className="text-white/70 text-sm">ESTIMATED EXTRACTION: 72 HOURS</div>
          </div>
          
          <div className="border-t border-cyber-red/50 pt-4">
            <div className="text-cyber-red font-orbitron font-bold text-xl animate-flicker">
              YOU HAVE BEEN SOLD
            </div>
          </div>
        </div>
        
        <div className="text-cyber-cyan/70 text-sm font-tech">
          Thank you for browsing Black Market Bazaar.<br />
          Your neural patterns have been catalogued.<br />
          <span className="text-cyber-red animate-pulse">Resistance is futile.</span>
        </div>
      </div>
    </div>
  );
}
