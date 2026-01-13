import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../services/api';

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  total: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(currentCart => {
      const isItemInCart = currentCart.find(item => item.id === product.id);

      if (isItemInCart) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (productId: number) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === productId);

      if (existingItem?.quantity === 1) {
        return currentCart.filter(item => item.id !== productId);
      }

      return currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, clearCart, total, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}