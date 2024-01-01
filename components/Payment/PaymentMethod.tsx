"use client";

import { useStateValue } from "@/lib/StateContext";
import formatMoney from "@/lib/formatMoney";
import useClientSecret from "@/lib/useClientSecret";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripeCardElementChangeEvent, loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function PaymentMethod() {
  return (
    <Elements stripe={stripe}>
      <PaymentMethodElement />
    </Elements>
  );
}

const PaymentMethodElement = () => {
  const { push } = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [{ cart }] = useStateValue();

  const total = cart.reduce((amount, item) => item.price + amount, 0);

  const clientSecret = useClientSecret(total);
  console.log("CLIENT SECRET >>>", clientSecret);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcessing(true);

    const result = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements?.getElement(CardElement)!,
      },
    });

    setSucceeded(true);
    setError("");
    setProcessing(false);

    push("/orders");
  };

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="flex p-[20px] my-0 mx-[20px] border-b border-b-[lightgray]">
      <div className="flex-1">
        <h3>Payment Method</h3>
      </div>
      <div className="flex-[4]">
        <form onSubmit={handleSubmit}>
          <CardElement onChange={handleChange} />

          <div>
            <h3>Order Total:{formatMoney(total)}</h3>
            <button disabled={processing || disabled || succeeded}>
              <span>{processing ? "Processing" : "Buy Now"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
