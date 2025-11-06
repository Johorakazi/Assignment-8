import React from 'react'
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-5">
      <img
        src="/assets/error-404.png"
        alt="errorpage"
        className="max-w-md w-full mb-6"
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        Oops, page not found!
      </h1>
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="bg-purple-600 hover:bg-violet-700 text-white font-semibold py-3 px-6  duration-200"
      >
        Go Back!
      </button>
    </div>
  );
};



export default ErrorPage