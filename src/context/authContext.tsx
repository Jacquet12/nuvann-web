import { createContext, useContext, useState } from "react";
import { nuvannApi } from "../services/apiRequest";
import { useToast } from "./useToast";

interface AuthContextValue {
  isAuthenticated: boolean;
  loading: Boolean
  login: () => void;
  logout: () => void;
  signUp: ( email: string, name: string, password: string,) => void;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  loading: false,
  login: () => {},
  logout: () => {},
  signUp: () => {}
});

interface signUpBodyInterface {
  email: string;
  name: string;
  password: string;
}


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const {successToast, errorToast}= useToast();

  const signUp = async (name: string, email: string, password:string) => {
    setLoading(true)
    const data = {
      name, email, password
    }
    try {
      const response = await nuvannApi.post("/users", data)
      console.log('response',response)
    } catch (error: any) {
      const message: string = error.response.data.message
      console.log(message)
      errorToast(message)
    } finally{
      setLoading(false)
    }
  }
  
  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signUp, loading}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}