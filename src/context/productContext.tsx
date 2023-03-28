import React, { createContext, useContext, useState } from 'react';
import { nuvannApi } from '../services/apiRequest';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    availableAmount?: number;
    prices: any;
    properties?: any
    images: string[],
    seller?: any,
    shipments: any
    relatedProducts: any
    availableCountries: any;
    soldAmount: any;
    category?:any;
    subcategory?:any;
    tags?:any
}

interface ProductsContextProps {
    products: Product[];
    loading: boolean;
    productInfos?: Product,
    getProducts: () => Promise<void>;
    getProductInfos: (id: number) => Promise<Product | undefined>;
}

interface ProductsProviderProps {
    children: React.ReactNode;
}
const ProductContext = createContext<ProductsContextProps>({
    products: [],
    loading: false,
    productInfos: undefined,
    getProducts: async () => Promise.resolve(),
    getProductInfos: async(id:number) => undefined,
});

export const useProduct = () => useContext(ProductContext);

// Provider

const ProductProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productInfos, setProductInfos] = useState<Product | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await nuvannApi.get("/products");
      setProducts(response.data.info);
    } catch (error: any) {
      console.log({error: error.message});
    } finally {
      setLoading(false);
    }
  };

  const getProductInfos = async(id: number) => {
    setLoading(true)
    try {
      const response = await nuvannApi.get(`/products/${id}`)
      setProductInfos(response.data.info)
    } catch (error) {
      
    } finally {
      setLoading(false)
    }
  }

  const value: any = {
    products,
    getProducts,
    loading,
    getProductInfos,
    productInfos
  }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
