import { createContext, ReactNode, useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";

interface AuthProviderType {
  children: ReactNode;
}
interface UserDetailsType {
  id: String;
  name: String;
  email: String;
}
interface AuthContextType {
  user: null | UserDetailsType;
  setUser: (user: null | UserDetailsType) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserDetailsType | null>(null);
  useEffect(() => {
    const checkUserSession = async () => {
      setIsLoading(true);
      try {
        let res = await axiosInstance.get("/user/checkUserSession");
        setUser(res.data.user);
      } catch (err) {
        console.log("Error in authenticating the user");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    checkUserSession();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
