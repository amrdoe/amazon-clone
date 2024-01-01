import cors from "@/lib/middlewares/cors";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(request: NextRequest) {
  const totalStr = request.nextUrl.searchParams.get("total");

  let total: number;

  try {
    total = +totalStr!;
  } catch {
    return cors(
      NextResponse.json({ error: "Total must be a number" }, { status: 400 })
    );
  }

  if (total <= 0)
    return cors(
      NextResponse.json(
        { error: "Total must be greater than 0" },
        { status: 400 }
      )
    );

  console.log("Payment Request Received for amount", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    console.log("Payment Intent Created", paymentIntent);

    return cors(
      NextResponse.json({
        clientSecret: paymentIntent.client_secret,
      })
    );
  } catch {
    return cors(
      NextResponse.json(
        { error: "An error occurred while processing your payment" },
        { status: 500 }
      )
    );
  }
}
