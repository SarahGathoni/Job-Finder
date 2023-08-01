import React from 'react';
import { Link} from 'react-router-dom';

export default function Signin(){
    
        
        


  return (
    <>
    <form className="bg-white p-4 max-w-md mx-auto rounded-lg shadow-md">
      <p className="text-lg font-semibold text-center text-gray-900 mb-4">Sign in to your account</p>
      <div className="relative mb-4">
        <input
          placeholder="Enter email"
          type="email"
          className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
          >
            <path
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
      </div>
      <div className="relative mb-4">
        <input
          placeholder="Enter password"
          type="password"
          className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
          >
            <path
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
            <path
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
      </div>
      <Link to='/Work'
        className="bg-indigo-500 text-white text-center py-2 px-4 rounded-lg w-full font-semibold text-sm uppercase"
        type="submit"
      >
        Sign in
      </Link>
      <p className="text-gray-600 text-sm text-center mt-4">
        No account? <Link to="/Signup" href="#!" className="text-indigo-500 font-semibold">Sign up</Link>
      </p>
    </form>
  


        </>
    )
}