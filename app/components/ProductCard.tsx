"use client";

import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductCard({
  title,
  price,
  description,
  image,
}: ProductCardProps) {
  return (
    <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 flex flex-col items-center shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.03] duration-300">

      {/* Product Image */}
      <div className="relative w-56 h-56 mb-4 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={image}
          alt={title}
          width={224}
          height={224}
          className="object-cover"
        />
      </div>

      {/* Product Title */}
      <h2 className="text-2xl font-semibold text-white mb-2 text-center">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 text-center leading-relaxed">
        {description}
      </p>

      {/* Price */}
      <p className="text-xl font-bold text-pink-400 mb-5">${price}</p>

      {/* Button */}
      <button
        className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-all font-medium text-white shadow-md"
        onClick={() => alert("Prepare Stripe flow here")}
      >
        Buy Now
      </button>
    </div>
  );
}
