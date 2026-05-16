"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

export default function ProductCard({ id, image, title, price }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col">

      <div className="w-full h-52 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={image}
          alt={title}
          className="max-h-full w-full object-contain hover:scale-110 transition cursor-pointer"
        />
      </div>

      <h2 className="mt-3 font-semibold text-sm line-clamp-2 text-black">
        {title}
      </h2>

      <p className="text-gray-600 mt-1">Rs {price}</p>

    <button
  onClick={() => dispatch(addToCart({ id, title, price, image }))}
  className="mt-auto bg-blue-600 text-white py-2 rounded
             hover:bg-blue-800
             hover:scale-105
             active:scale-95
             transition-all duration-200
             cursor-pointer"
>
  Add to Cart
</button>
    </div>
  );
}