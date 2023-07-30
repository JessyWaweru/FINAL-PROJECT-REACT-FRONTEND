import React from "react";
import { Link } from "react-router-dom";


export default function ProductItem({ name, description, id, image }) {
  
  return (
    <div key={id}
         className="w-72 mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:scale-110 ease-in-out duration-300 m-3">
      <div>
        <img
          className="w-full h-1/2"
          src={image || "/assets/pexels-luis-quintero-2774556.jpg"}
          alt=""
        />
      </div>
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800 text-center w-full">
          {name}
        </h2>
      </div>
      <div className="px-4 py-2 flex  flex-col gap-4">
        <div className="flex gap-2">
          <p>Description</p>
          <p className="font-bold">{description}</p>
        </div>
        <Link to={`/ProductDetails/${id}`}>
            <button className="bg-rose-600 hover:opacity-80 text-white px-4 py-2 rounded-lg">
            DETAILS 
           </button>
       </Link>
      </div>
    </div>
  );
}