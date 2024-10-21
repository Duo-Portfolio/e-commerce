import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe("sk_test_51QByq8Rx9JkW9yA5McCzT4Np41vsIPu4HcfwYLbpWgebMLMuF2bcKvjOP9nmNfCAaqVV465EGl4WWUu3E4zyMusi00jvP6ylVd"!, {
  typescript: true,
  apiVersion: "2024-09-30.acacia", // Make sure this version is correct
});

export async function POST(request: any) {
  try {
    const data = await request.json();
    const amount = data.amount;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100, // Stripe expects the amount in cents
      currency: "USD",
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret }, { status: 200 });
  } catch (error: any) {
    // Ensure that you return a proper message for any error
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
