import React, { createContext, useContext, useState } from 'react';
import { nuvannApi } from '../services/apiRequest';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface ProductsContextProps {
    products: Product[];
    loading: boolean;
    getProducts: () => Promise<void>;
}

interface ProductsProviderProps {
    children: React.ReactNode;
}
const ProductContext = createContext<ProductsContextProps>({
    products: [],
    loading: false,
    getProducts: () => Promise.resolve(),
});

export const useProduct = () => useContext(ProductContext);

// Provider

const ProductProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async () => {
    // setLoading(true);
    try {
      const response = await nuvannApi.get("/products");
      setProducts(response.data.info);
    } catch (error: any) {
      console.log({error: error.message});
    } finally {
    //   setLoading(false);
    }
  };

  const value: any = {
    products,
    getProducts,
    loading
  }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
