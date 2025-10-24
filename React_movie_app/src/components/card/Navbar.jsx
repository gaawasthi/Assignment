import React, { useState } from 'react';
import { Film, Search, Heart, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/authSlice/authSlice';
import { useNavigate } from 'react-router-dom';

export default function MovieNavbar() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="bg-black shadow-2xl border-b border-gray-800 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Film className="h-10 w-10 text-red-500 transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-red-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div>
              <span className="text-3xl font-black text-white tracking-tight">
                MOVIEHUB
              </span>
              <div className="text-xs text-gray-400 font-medium tracking-widest">
                STREAMING
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div onClick={()=>navigate("/home")} className="relative text-white font-semibold hover:text-red-500 transition-colors group cursor-pointer">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </div>

            <div className="relative text-gray-300 font-semibold hover:text-red-500 transition-colors group cursor-pointer">
              Movies
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </div>

          </div>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search movies, shows..."
                className="bg-gray-900 bg-oplogoutacity-80 text-white placeholder-gray-500 rounded-lg py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500 w-64 border border-gray-800 focus:bg-gray-900 transition-all"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500 group-focus-within:text-red-500 transition-colors" />
            </div>

            {/* {isLoggedIn && (
              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors hover:bg-gray-900 rounded-lg">
                <Heart className="h-6 w-6" />
              </button>
            )} */}

            {currentUser ? (
              <button
                onClick={() => {
                  dispatch(logout());
                  navigate('/login');
                }}
                className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-2.5 rounded-lg font-bold hover:from-red-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg"
              >
                LogOut
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate('/login');
                }}
                className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-2.5 rounded-lg font-bold hover:from-red-500 hov
er:to-purple-500 transition-all transform hover:scale-105 shadow-lg"
              >
                Login
              </button>
               
            )}
            {
              currentUser ? (
                 <User  onClick={() => {
                  navigate('/profile');
                }}  className='text-4xl text-amber-50 cursor-pointer hover:size-8' />
              ):null
                
            }

         
          </div>
        </div>
      </div>
    </nav>
  );
}
