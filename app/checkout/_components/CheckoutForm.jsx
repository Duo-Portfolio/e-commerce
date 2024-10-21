import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext"; // Import the hook

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { user } = useAuth(); // Get the current user

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Get cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Create an order with the cart items
    const order = {
      userId: user.id, // Assuming user has an id
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity,
        availabilityStatus: item.availabilityStatus,
        brand: item.brand,
        category: item.category,
        description: item.description,
        images: item.images,
        // Add more fields as necessary
      })),
      amount: amount,
      date: new Date().toISOString(),
    };

    // Store the order in local storage
    localStorage.setItem("order", JSON.stringify(order));

    // Clear the cart from local storage
    localStorage.removeItem("cart");

    sendEmail();
    // Submit the payment
    const { error: submitError } = await elements.submit();
    if (submitError) {
      const messageContainer = document.querySelector("#error-message");
      messageContainer.textContent = submitError.message;
      return;
    }

    const res = await fetch("/api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const { clientSecret } = await res.json();
    const result = await stripe.confirmPayment({
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Successful payment
      console.log("Payment successful!");
    }
  };
  const sendEmail = async () => {
    const res = await fetch("api/send-email", {
      method: "post",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-4 md:mx-[320px] mt-12">
        <PaymentElement />
        {errorMessage && <div id="error-message">{errorMessage}</div>}
        <button className="w-full mt-4 p-2 text-white rounded-md bg-cyan-400">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
