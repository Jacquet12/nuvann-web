import { createContext, useContext, useEffect, useState } from 'react';
import { nuvannApi } from '../services/apiRequest';
import { useAuthContext } from './authContext';


interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

type CartContextType = {
  cart: Product[];
  cartTotal: number;
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  handleGetCart: () => void;
  cartCount: number
  
};

const CartContext = createContext<CartContextType>({
  cart: [],
  cartCount: 0,
  cartTotal: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  handleGetCart: () => {},
});


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartCount, setcartCount] = useState<number>(0);



  const handleGetCart = async () => {
      try {
          const {data} = await nuvannApi.get("/carts")
          console.log(data.info)
          setCart(data.info.items);
          setcartCount(data.info.count)
          
      } catch (error) {
          
      }
  }

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // const cartTotal = cart?.reduce((acc, item) => acc + item.price, 0) || 0;
  const cartTotal = 0;

  return (
    <CartContext.Provider value={{cartCount, cart, cartTotal, addToCart, removeFromCart, handleGetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

