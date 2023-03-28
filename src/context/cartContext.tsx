import { createContext, useContext, useEffect, useState } from 'react';
import { nuvannApi } from '../services/apiRequest';
import { useToast } from './useToast';


interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

type sizeProps ={
  key: string,
  value: string
}
type colorProps = {
  key:string,
  value: string
}
export interface addProductProps {
  id: number;
  quantity: number;
  selectedSize: sizeProps;
  selectedColor: colorProps;
  selectedShippingInfo: number;
}


type CartContextType = {
  cart: Product[];
  cartTotal: number;
  addToCart: (product:any) => void;
  removeFromCart: (index: number) => void;
  handleGetCart: () => void;
  cartCount: number,
  loading: boolean
  
};

const CartContext = createContext<CartContextType>({
  loading:false,
  cart: [],
  cartCount: 0,
  cartTotal: 0,
  addToCart: (data:any) => {},
  removeFromCart: () => {},
  handleGetCart: () => {},
});


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const {errorToast, successToast} = useToast();
  const [loading, setLoading] = useState<Boolean>(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [cartCount, setcartCount] = useState<number>(0);



  const handleGetCart = async () => {
      try {
          const {data} = await nuvannApi.get("/carts")
          setCart(data.info.items);
          setcartCount(data.info.count)
          
      } catch (error) {
          
      }
  }

  const addToCart = async (data:any) => {
    setLoading(true)
    const color = data.selectedColor
    const size = data.selectedSize
    const ifExist = [
      size,
      color
    ]
    const properties = ifExist?.filter(exist=> {
      return exist.value
    })
    const object = {
      productId: data.id,
      shipmentId: data.selectedShippingInfo,
      quantity: data.quantity,
      properties
      }
    try {
      const response = await nuvannApi.post("/carts", object)
      successToast(response.data.message)
    } catch (error:any) {
      const message: string = error.response.data.message
     errorToast(message)
     return "error"
    } finally {
      handleGetCart();
      setLoading(false)
    }
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // const cartTotal = cart?.reduce((acc, item) => acc + item.price, 0) || 0;
  const cartTotal = 0;
  const  value: any= {
    loading,
    cartCount,
    cart,
    cartTotal,
    addToCart,
    removeFromCart,
    handleGetCart 
  }

  return (
    <CartContext.Provider 
     value={value}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

