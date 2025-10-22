"use client";

// This component represents a single product card with a Buy Now button.
// We will later connect the Buy button to a payment gateway like Stripe.

import React from "react";

export default function ProductCard() {
  return (
    <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
      {/* Product Image (Temporary Placeholder) */}
      <div className="w-32 h-32 bg-neutral-800 rounded-lg mb-4"></div>

      {/* Product Title */}
      <h2 className="text-xl font-semibold mb-2">Premium Product</h2>

      {/* Product Description */}
      <p className="text-neutral-400 text-sm mb-4">
        Get access to our premium product with full features.
      </p>

      {/* Product Price */}
      <p className="text-2xl font-bold mb-6">$19.99</p>

      {/* Buy Button */}
      <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition">
        Buy Now
      </button>
    </div>
  );
}
