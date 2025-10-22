"use client";

import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 flex flex-col items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
      
      {/* Product Image */}
      <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
        <Image
          src="https://images.unsplash.com/photo-1511379922014-9cb63e57ea1c" 
          alt="Premium Headphones"
          fill
          className="object-cover"
        />
      </div>

      {/* Product Title */}
      <h2 className="text-2xl font-semibold mb-2">Premium Wireless Headphones</h2>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 text-center">
        Crystal-clear sound, luxury comfort, and long-lasting battery life.
      </p>

      {/* Price */}
      <p className="text-xl font-bold mb-5">$149.99</p>

      {/* Button */}
      <button
        className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all font-medium"
        onClick={() => alert("Prepare Stripe flow here")}
      >
        Buy Now
      </button>
    </div>
  );
}
