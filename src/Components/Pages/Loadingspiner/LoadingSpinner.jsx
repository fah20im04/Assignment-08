import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Loading Text */}
      <h2 className="mt-6 text-2xl font-bold text-gray-600 tracking-wide">
        Loading, please wait...
      </h2>
    </div>
  );
};

export default LoadingSpinner;

