"use client";

import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm({ onClose }: { onClose: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success",
      },
    });

    if (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <button 
        type="submit" 
        disabled={!stripe || loading}
        className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      <button
        type="button"
        onClick={onClose}
        className="w-full bg-gray-400 text-white py-2 rounded-lg mt-2"
      >
        Cancel
      </button>
    </form>
  );
}
