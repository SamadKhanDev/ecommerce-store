"use client";

import { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import ProductCard from "./ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/productThunk";

export default function ProductList() {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector(
    (state) => state.products
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 font-medium">Loading products...</p>
    </div>
  );

if (error)
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-red-500 text-5xl">⚠️</div>

      <p className="mt-4 text-red-600 font-semibold text-lg">
        Something went wrong
      </p>

      <p className="text-gray-500 text-sm mt-1">
        {error}
      </p>
    </div>
  );

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 text-black">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}