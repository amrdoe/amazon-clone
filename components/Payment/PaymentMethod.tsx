"use client";

import { useStateValue } from "@/lib/StateContext";
import { db } from "@/lib/firebase";
import formatMoney from "@/lib/formatMoney";
import useClientSecret from "@/lib/useClientSecret";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  StripeCardElementChangeEvent,
  StripeError,
  loadStripe,
} from "@stripe/stripe-js";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../Button";

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
  const [{ cart, user }, dispatch] = useStateValue();

  const total = cart.reduce((amount, item) => item.price + amount, 0);

  const clientSecret = useClientSecret(total);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const result = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements?.getElement(CardElement)!,
        },
      });

      if (!result || result.error) throw result?.error;

      if (user?.uid) {
        const payment = doc(
          db,
          "users",
          user.uid,
          "orders",
          result.paymentIntent.id
        );

        await setDoc(payment, {
          cart,
          amount: result.paymentIntent.amount,
          created: result.paymentIntent.created,
        });
      }

      setSucceeded(true);
      setError("");
      setProcessing(false);

      dispatch({ type: "EMPTY_CART" });

      push("/orders");
    } catch (error) {
      console.log(error);
      setSucceeded(false);
      setError((error as StripeError).message || "");
    } finally {
      setProcessing(false);
    }
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
            <Button className="rounded-[2px] w-full h-[30px] font-extrabold" disabled={processing || disabled || succeeded}>
              <span>{processing ? "Processing" : "Buy Now"}</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
