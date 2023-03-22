import { createContext, useContext, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { nuvannApi } from "../services/apiRequest";
import { useToast } from "./useToast";

interface AuthContextValue {
  isAuthenticated: boolean;
  loading: Boolean
  login: () => void;
  logout: () => void;
  signUp: (name: string,email: string, password: string,) => void;
  signIn: (email: string, password: string,) => void;
  user: UserData;
  token: string
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

interface signUpBodyInterface {
  name: string;
  email: string;
  password: string;
}
interface UserData {
  id: string | number;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: UserData;
}


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const {successToast, errorToast}= useToast();

  const navigate = useNavigate();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@nuvann:token');
    const user =localStorage.getItem('@nuvann:user');

    if(token && user) {
      return {
        token,
        user: JSON.parse(user)
      }
    }
    return {} as AuthState

  })

  const signUp = async (name: string, email: string, password:string) => {
    setLoading(true)
    const data = {
      name, email, password
    }
    try {
      const response = await nuvannApi.post("/users", data)
      successToast(response.data.message)
      window.location.reload()
    } catch (error: any) {
      const message: string = error.response.data.message
      errorToast(message)
    } finally{
      setLoading(false)
    }
  }

  const signIn = async(email:string, password: string) => {
    setLoading(true)
    const data = {
      email,
      password
    }
    try {
      const response = await nuvannApi.post("/auth/login", data)
      const {user_info, access_token} = response.data.info;
      // successToast(response.data.message);
      navigate("/")
      localStorage.setItem('@nuvann:token', access_token);
      localStorage.setItem('@nuvann:user', JSON.stringify(user_info));
      setData({
        user : user_info,
        token: access_token
      });

    } catch (error: any) {
      const message: string = error.response.data.message
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
    <AuthContext.Provider value={{ user: data.user, token: data.token, isAuthenticated, login, logout, signUp, signIn, loading}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}