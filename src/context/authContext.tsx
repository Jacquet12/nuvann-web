import { createContext, useContext, useState } from "react";
import { nuvannApi } from "../services/apiRequest";

interface AuthContextValue {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  signUp: ( email: string, name: string, password: string,) => void;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
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

  const signUp = async (name: string, email: string, password:string) => {
    const data = {
      name, email, password
    }
    try {
      const response = await nuvannApi.post("/users", data)
      console.log(response)
    } catch (error: any) {
      console.log(error.response)
    }
  }
  
  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}