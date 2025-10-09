import React from 'react';
import errorpage from '../../../assets/error-404.png';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
            <img
                src={errorpage}
                alt="Error"
                className="w-[400px] md:w-[500px] mb-6"
            />
            <h3 className="text-5xl font-extrabold text-gray-800">
                404 — Not Found
            </h3>
            <p className="text-lg text-gray-500 mt-3">
                The page you are looking for doesn’t exist or was moved.
            </p>
        </div>
    );
};

export default ErrorPage;
