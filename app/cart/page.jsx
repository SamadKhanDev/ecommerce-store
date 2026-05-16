"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} from "@/redux/cartSlice";

export default function CartPage() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* NAVBAR */}
      <Navbar search={search} setSearch={setSearch} />

      <div className="p-6">

        <h1 className="text-2xl font-bold mb-6 text-black">
          Cart
        </h1>

        {/* CLEAR CART */}
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-4 py-2 rounded mb-6
                     hover:bg-red-600 hover:scale-105 active:scale-95
                     transition-all duration-200 cursor-pointer"
        >
          Clear Cart
        </button>

        {/* CART ITEMS */}
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 mb-4 rounded-xl shadow flex justify-between items-center
                       hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >

            {/* LEFT SIDE (IMAGE + TEXT) */}
            <div className="flex items-center gap-4">

              {/* PRODUCT IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain bg-gray-100 rounded-md
                           hover:scale-110 transition duration-200"
              />

              {/* TITLE + PRICE */}
              <div>
                <h2 className="font-semibold text-black line-clamp-1">
                  {item.title}
                </h2>

                <p className="text-gray-700 font-medium">
                  Rs {item.price}
                </p>
              </div>

            </div>

            {/* RIGHT SIDE CONTROLS */}
            <div className="flex items-center gap-3">

              {/* - BUTTON */}
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="w-8 h-8 bg-gray-200 rounded-md text-black
                           hover:bg-gray-300 hover:scale-110 active:scale-90
                           transition-all duration-150 cursor-pointer"
              >
                -
              </button>

              {/* QTY */}
              <span className="w-6 text-center font-semibold text-black
                               hover:scale-110 transition">
                {item.qty}
              </span>

              {/* + BUTTON */}
              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="w-8 h-8 bg-gray-200 rounded-md text-black
                           hover:bg-gray-300 hover:scale-110 active:scale-90
                           transition-all duration-150 cursor-pointer"
              >
                +
              </button>

              {/* REMOVE */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 text-sm text-red-500 font-medium
                           hover:text-red-700 hover:underline
                           hover:scale-110 transition-all duration-200 cursor-pointer"
              >
                Remove
              </button>

            </div>

          </div>
        ))}
      </div>
    </>
  );
}