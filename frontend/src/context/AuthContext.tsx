import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { axiosInstanceWithToken } from "@/lib/axios";

interface AuthProviderType {
  children: ReactNode;
}
interface UserDetailsType {
  id: String;
  name: String;
  email: String;
  profile: String;
}
export interface AuthContextType {
  user: UserDetailsType | null;
  setUser: (user: UserDetailsType | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserDetailsType | null>(null);
  useEffect(() => {
    const checkUserSession = async () => {
      setIsLoading(true);
      try {
        let res = await axiosInstanceWithToken.get("/user/checkUserSession");
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

  console.log(user);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
