import { createContext, useContext, useEffect, useState } from 'react';
import { nuvannApi } from '../services/apiRequest';
import { useToast } from './useToast';


interface subTotalProps {
  discountPercent: number,
  formattes: string,
  raw: string
}
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    subtotal: subTotalProps;
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
  setCart:any;
  subtotal:subTotalProps[];
  addToCart: (product:any) => void;
  removeFromCart: (index: number) => void;
  handleGetCart: () => void;
  updateCart: (id:number, quantity:number)=>void;
  cartCount: number;
  loading: boolean;
  productSubtotal: any;
  shipmentSubtotal:any;
  total:number;
};

const CartContext = createContext<CartContextType>({
  loading:false,
  subtotal: [],
  cart: [],
  setCart:[],
  cartCount: 0,
  addToCart: (data:any) => {},
  removeFromCart: (id:number) => {},
  handleGetCart: () => {},
  updateCart: (id:number, quantity:number)=>{},
  productSubtotal: {},
  shipmentSubtotal:{},
  total: 0
});


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const {errorToast, successToast} = useToast();
  const [loading, setLoading] = useState<Boolean>(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [cartCount, setcartCount] = useState<number>(0);
  const [productSubtotal, setProductSubtotal] = useState();
  const [shipmentSubtotal, setShipmentSubtotal] = useState();
  const [total, setTotal] = useState<number>(0);
  



  const handleGetCart = async () => {
      try {
          const {data} = await nuvannApi.get("/carts")
          setCart(data.info.items);
          setcartCount(data.info.count)
          setProductSubtotal(data.info.productSubtotal)
          setShipmentSubtotal(data.info.shipmentSubtotal)
          setTotal(data.info.total)
      } catch (error) {}
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

  const removeFromCart:any = async (id: number) => {
    try {
      const newCart = cart.filter(cart=>cart.id !== id)
      setCart(newCart);
      await nuvannApi.delete(`/carts/${id}`)
    } catch (error:any) {
      const message: string = error.response.data.message
      errorToast(message)
    } finally {
      handleGetCart();
    }
  };

  const updateCart = async (id:number, quantity: number) => {
    try {
      await nuvannApi.put(`/carts/${id}`,{
        quantity
      })
    } catch (error:any) {
      const message: string = error.response.data.message
      errorToast(message)
    } finally{
      handleGetCart();
    }
  }

  const  value: any= {
    loading,
    cartCount,
    cart,
    total,
    setCart,
    shipmentSubtotal,
    productSubtotal,
    addToCart,
    removeFromCart,
    handleGetCart,
    updateCart,
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

