import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='flex items-center justify-between px-6 py-4'>
      <div className='flex items-center gap-4'>
        <Link to='/' className='text-italic font-extrabold text-4xl'>
          Finder
        </Link>
      </div>
      <div>
        <div className="flex justify-end items-end">
          <div className="w-full max-w-screen-lg px-4 flex justify-end items-end">
            <div className="flex justify-right ">
              <Link
                to="/Signin"
                className="flex items-center  justify-center gap-2 font-medium text-sm uppercase tracking-wide text-blueGray-600 bg-blueGray-200 border border-blueGray-400 rounded-full px-7 py-4 transform transition duration-200 shadow-md hover:text-blueGray-700 hover:bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-700 active:shadow-none"
              >
                Sign in
              </Link>
              <Link
                to="/Signup"
                className="flex items-center justify-center gap-2 font-medium text-sm text-white uppercase tracking-wide text-blueGray-600 bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-700 border border-blueGray-400 rounded-full px-7 py-4 transform transition duration-200 shadow-md hover:text-blueGray-700 hover:bg-blueGray-100 active:shadow-none"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
