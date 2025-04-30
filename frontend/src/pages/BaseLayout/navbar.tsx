import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircleUser } from 'lucide-react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Replace this with your actual authentication logic if needed
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  return (
    <div className="pt-3">
      <nav
        className="bg-[#640606] p-1 hover:p-3 rounded-full w-1/4 hover:w-2/3 mx-auto shadow-lg hover:shadow-gray-950 duration-100 absolute top-2 left-0 right-0 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div className="text-white text-lg font-bold ml-4">Logo</div>
          <div className="space-x-9 mr-2 flex flex-row items-center">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition duration-300 hover:underline"
            >
              Home
            </Link>
            {isHovered && (
              <>
                <Link
                  to="/interviewExp"
                  className="text-gray-300 hover:text-white transition duration-300 hover:underline"
                >
                  Interview Exp
                </Link>
                <Link
                  to="/course"
                  className="text-gray-300 hover:text-white transition duration-300 hover:underline"
                >
                  Courses
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition duration-300 hover:underline"
                > 
                  Sessions
                </Link>
                {isAuthenticated ? (
                  <Link
                    to="/account"
                    className="text-gray-300 hover:text-white transition duration-300 hover:underline flex items-center"
                  >
                    <CircleUser size={27} />
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-gray-300 hover:text-white transition duration-300 hover:underline"
                  >
                    Login
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

export default Navbar;
