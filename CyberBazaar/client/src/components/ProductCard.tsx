import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const handleClick = () => {
    onClick(product);
  };

  return (
    <div 
      className="product-card bg-cyber-darker border border-cyber-cyan/30 p-4 transition-all duration-300 hover:border-cyber-pink cursor-pointer neon-border group"
      onClick={handleClick}
    >
      <div className="relative mb-4 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        {product.isSpecial && (
          <div className="absolute top-2 right-2">
            <span className="bg-cyber-red px-2 py-1 text-xs font-tech animate-pulse text-black font-bold">
              SPECIAL
            </span>
          </div>
        )}
      </div>
      
      <h3 className="font-orbitron font-bold text-lg text-cyber-cyan mb-2 group-hover:animate-flicker">
        {product.name}
      </h3>
      
      <p className="text-white/80 text-sm mb-4 font-tech leading-relaxed">
        {product.description}
      </p>
      
      <div className="flex justify-between items-center">
        <span className="text-cyber-yellow font-orbitron font-bold text-xl">
          {product.price}
        </span>
        <button className="bg-cyber-pink/20 border border-cyber-pink text-cyber-pink px-4 py-2 text-sm font-tech hover:bg-cyber-pink/40 transition-all neon-pink-border">
          SELECT
        </button>
      </div>
    </div>
  );
}
