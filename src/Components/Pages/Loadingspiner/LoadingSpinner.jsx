import React from "react";
import logo from "../../../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">

          <div className="relative w-40 h-40 border-8 border-blue-500 border-t-transparent rounded-full animate-spin">

              <img
                  src={logo}
                  alt="Logo"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full"
              />
          </div>


          <h1 className="mt-10 text-4xl font-bold text-gray-700 tracking-wide">
              LO
              <span className="inline-block w-12 h-12">
                  <img src={logo} alt="Logo O" className="w-full h-full" />
              </span>
              ADING...
          </h1>
    </div>
  );
};

export default LoadingSpinner;
