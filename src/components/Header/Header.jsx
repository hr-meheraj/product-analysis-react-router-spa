import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };
  return (
    <nav className="relavtive py-2 shadow-sm items-center flex justify-between font-poppins px-6 container mx-auto ">
      <h4 className='text-xl font-semibold'>
        <Link to="/">Stylish Watch</Link>
      </h4>
      <div
        className={`sm:hidden cursor-pointer hover:text-pink-600 transition-all z-[100] ${toggle && "text-white"}`}
        onClick={handleToggle}
      >
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        )}
      </div>
      {/* 
      
      absolute sm:relative sm:flex sm:flex-row  flex flex-col  sm:gap-[15px]
      color: white;  position: absolute;  width: 100%; background: #000000eb; left: 0;padding: 15px; gap: 20px; top: 35px; align-items: center;right: 0;
      */}
      <div
        className={`transition-all sm:flex-row flex flex-col sm:gap-[15px] sm:static  right-0 left-0 z-[50] sm:bg-white bg-[#000000eb] p-[20px] gap-[20px] sm:p-0 items-center sm:items-start text-white sm:text-black ${
          toggle
            ? " absolute top-0 bottom-0 justify-center"
            : " absolute top-[-990px]"
        }`}
      >
        <NavLink
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? "font-semibold text-rose-700" : "hover:text-pink-600"
          }
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? "font-semibold text-rose-700" : "hover:text-pink-600"
          }
          to="/reviews"
        >
          REVIEWS
        </NavLink>
        <NavLink
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? "font-semibold text-rose-700" : "hover:text-pink-600"
          }
          to="/blogs"
        >
          BLOGS
        </NavLink>
        <NavLink
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? "font-semibold text-rose-700" : "hover:text-pink-600"
          }
          to="/dashboard"
        >
          DASHBOARD
        </NavLink>
        <NavLink
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? "font-semibold text-rose-700" : "hover:text-pink-600"
          }
          to="/about"
        >
          ABOUT
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
