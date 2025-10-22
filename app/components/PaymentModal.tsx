"use client";

import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaymentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetch("/api/create-payment-intent", { method: "POST" })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60">
      <div className="bg-white text-black p-6 rounded-lg w-full max-w-md">
        {clientSecret ? (
          <Elements options={{ clientSecret }} stripe={stripePromise}>
            <CheckoutForm onClose={onClose} />
          </Elements>
        ) : (
          <p>Loading payment form...</p>
        )}
      </div>
    </div>
  );
}
