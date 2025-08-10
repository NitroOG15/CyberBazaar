import { Switch, Route } from "wouter";
import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BlackMarketBazaar from "@/pages/BlackMarketBazaar";
import Transaction from "@/pages/Transaction";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderComplete from "@/pages/OrderComplete";
import NotFound from "@/pages/not-found";
import { Product, CartItem, products } from "@/lib/products";

function Router() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [completedOrder, setCompletedOrder] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const placeOrder = () => {
    const orderNum = `BMB-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setOrderNumber(orderNum);
    setCompletedOrder([...cart]);
    setCart([]);
  };

  return (
    <Switch>
      <Route path="/">
        <BlackMarketBazaar cart={cart} onAddToCart={addToCart} />
      </Route>
      <Route path="/transaction/:id">
        {(params) => {
          const product = products.find(p => p.id === parseInt(params.id));
          if (!product) return <NotFound />;
          return <Transaction product={product} onAddToCart={() => addToCart(product)} />;
        }}
      </Route>
      <Route path="/cart">
        <Cart 
          cart={cart} 
          onUpdateQuantity={updateQuantity}
          onRemoveFromCart={removeFromCart}
        />
      </Route>
      <Route path="/checkout">
        <Checkout cart={cart} onPlaceOrder={placeOrder} />
      </Route>
      <Route path="/order-complete">
        <OrderComplete cart={completedOrder} orderNumber={orderNumber} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
