"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  "pk_test_51QByq8Rx9JkW9yA5p9eVnTed1kffly6e40CZFKFbuhbH3wfgcCGvotZlwO3xXJDJvEmHzDvlMARcFXTOuzahWDaG00fhEefemA"
);

const Checkout = () => {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 0;

  if (amount <= 0) {
    return <div>Error: Invalid amount</div>;
  }

  const options = {
    mode: "payment",
    currency: "usd",
    amount: amount * 100, // Stripe requires the amount to be in cents
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amount} />
    </Elements>
  );
};

export default Checkout;
