import React, { createContext, useContext, useState } from 'react';
import { nuvannApi } from '../services/apiRequest';

interface Promotions {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface PromotionsContextProps {
    promotions: Promotions[];
    loading: boolean;
    getPromotions: () => Promise<void>;
}

interface PromotionsProviderProps {
    children: React.ReactNode;
}
const PromotionsContext = createContext<PromotionsContextProps>({
    promotions: [],
    loading: false,
    getPromotions: () => Promise.resolve(),
});

export const usePromotions = () => useContext(PromotionsContext);

// Provider

const PromotionsProvider: React.FC<PromotionsProviderProps> = ({ children }) => {
  const [promotions, setPromotions] = useState<Promotions[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getPromotions = async () => {
    // setLoading(true);
    try {
      const response = await nuvannApi.get("/promotions");
      console.log(response.data)
      setPromotions(response.data.info);
    } catch (error: any) {
      console.log({error: error.message});
    } finally {
    //   setLoading(false);
    }
  };

  const value: any = {
    promotions,
    getPromotions,
    loading
  }

  return (
    <PromotionsContext.Provider value={value}>
      {children}
    </PromotionsContext.Provider>
  );
};

export default PromotionsProvider;
