import React from 'react'
import { useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-5">
      <img
         src="/assets/App-Error.png"
        alt="AppNotFound"
        className="max-w-md w-full mb-6"
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
       OPPS!! APP NOT FOUND
      </h1>
      <p className="text-gray-500 mb-6">
       The App you are requesting is not found on our system.  please try another apps
      </p>

      <button
        onClick={() => navigate(-1)}
        className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-6"
      >
        Go Back!
      </button>
    </div>
  );
};




export default AppNotFound