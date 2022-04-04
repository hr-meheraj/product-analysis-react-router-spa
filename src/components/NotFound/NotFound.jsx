import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex w-full justify-center items-center h-[80vh]">
      <div className="p-4">
        <img className='w-[300px]' src="https://i.ibb.co/J58TrY6/download.png" alt="404 Image" />
        <h3 className="font-poppins text-xl flex gap-[5px] justify-center items-center font-semibold text-[#407bff] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
          </svg>
          <Link to="/">Back to Home</Link>
        </h3>
      </div>
    </div>
  );
}

export default NotFound;
