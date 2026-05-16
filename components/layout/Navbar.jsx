"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";


export default function Navbar({ search, setSearch }) {

  const totalQty = useSelector((state) => state.cart.totalQty);

  return (
    <header className="bg-white shadow-md z-50">
      {/* sticky top-0 */}

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">


<Link href="/" className="flex items-center gap-2">

  <Image
    src="https://i.pinimg.com/736x/09/0f/55/090f5516b8b09acf34fd4d55517c2e24.jpg"
    alt="logo"
    width={40}
    height={40}
    className="rounded-full "
  />

  <span className="text-2xl font-bold text-gray-600 cursor-pointer leading-none">
    Sam Fusion
  </span>

</Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6 text-gray-800 font-medium">

          <Link
            href="/"
            className="hover:text-gray-500 transition"
          >
            Home
          </Link>

          <Link
            href="/cart"
            className="hover:text-gray-500 transition"
          >
            Cart
          </Link>

        </nav>

        {/* SEARCH BAR */}
        <div className="flex-1 max-w-md">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-full
                       text-black placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* CART ICON */}
        <Link
          href="/cart"
          className="relative flex items-center hover:scale-110 transition"
        >

          <span className="text-2xl">🛒</span>

          {totalQty > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalQty}
            </span>
          )}

        </Link>

      </div>
    </header>
  );
}