import { axiosInstanceWithToken } from "@/lib/axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        await axiosInstanceWithToken.get("/user/checkUserSession");
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkUserSession();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If authenticated, redirect to /account (or wherever you want)
  if (isAuthenticated) {
    return <Navigate to="/account" replace />;
  }

  // If not authenticated, render the children (login/signup page)
  return <>{children}</>;
};

export default PublicRoute;