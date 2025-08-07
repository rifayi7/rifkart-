import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type AuthContextType = {
  isAuth: boolean;
  loading: boolean;
  logout: () => void;
  signup: (username: string, password: string) => void;
  login: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged === "true") {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  //signup function

  const signup = (username: string, password: string) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };

  //login
  const login = () => {
    localStorage.setItem("isLogegd", "true");
    setIsAuth(true);
  };

  //logout function

  const logout = () => {
    localStorage.removeItem("isLogged");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, loading, logout, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
