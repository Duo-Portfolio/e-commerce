"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";
import { AuthProvider } from "../../context/AuthContext"; // Import the AuthContext
import NavBar from "../../components/navbar/NavBar";

const stripePromise = loadStripe(
  "pk_test_51QByq8Rx9JkW9yA5p9eVnTed1kffly6e40CZFKFbuhbH3wfgcCGvotZlwO3xXJDJvEmHzDvlMARcFXTOuzahWDaG00fhEefemA"
);

const Checkout = () => {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 0;

  const roundedAmount = Math.round(amount);

  if (amount <= 0) {
    return <div>Error: Invalid amount</div>;
  }

  const options = {
    mode: "payment",
    currency: "usd",
    amount: roundedAmount * 100, // Stripe requires the amount to be in cents
  };

  return (
    <>
      <NavBar />
      <Elements stripe={stripePromise} options={options}>
        <AuthProvider>
          <CheckoutForm amount={amount} />
        </AuthProvider>
      </Elements>
    </>
  );
};

export default Checkout;
