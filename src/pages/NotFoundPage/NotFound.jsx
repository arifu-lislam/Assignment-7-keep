import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
      <div className="text-center max-w-md">
        {/* Big bold 404 error code */}
        <h1 className="text-9xl font-extrabold text-indigo-600 animate-bounce">
          404
        </h1>

        {/* Friendly error message */}
        <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>

        <p className="text-gray-500 mb-8">
          Oops! The page you are looking for doesn't exist, has been removed, or
          is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="">
          <Link to={"/"}>
            <button className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg shadow-md transition-all duration-200">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
