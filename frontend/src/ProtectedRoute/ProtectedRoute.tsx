import { axiosInstanceWithToken } from "@/lib/axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const res = await axiosInstanceWithToken.get("/user/checkUserSession");
        console.log(res.data);
        setIsAuthenticated(true);
      } catch (err) {
        console.log("Error in Authentication");
      } finally {
        setIsLoading(false);
      }
    };
    checkUserSession();
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      alert("please loggin");
      navigate("/login");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
