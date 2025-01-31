// // ye stripe ki waja sy use kar raha ho

"use client"

import convertToSubCurrency from '../lib/ConvertToSubCurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckoutPage from './stripeCheckOut';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = async() => {
    
  const url = await fetch("http://localhost:3000/api/addToCard", {
    cache: "no-store",
  });

  
  const convert = await url.json();

  // is ko is liye dia q ky backend ky andar mein ny array ky andar array hai or us ky andar 0 index ky andar sary product aye gy
  const arrayOne = convert[0];
  const findLength=arrayOne.length -1;

  // ye is liye dia hai q ky mein ny backend ek default array banaya hai jab  array ki value 2 hogi to first default value delete hogaye gi shift ki madad sy shift array ki frist value ko delete karta hai
  if (arrayOne.length >= 1) {
    arrayOne.shift();
  }

  // Calculate the total price by summing up all product prices or array ky andar jitny bhi product hai un sab ki price ko plus kar raha hai
  const totalPrice = arrayOne.reduce(
    (acc: number, product: any, index: number) =>
      acc + product.price * (convert[1][index] || 0),
    0
  );


    const amount =totalPrice +0.5
    return (
        <div>
            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertToSubCurrency(amount),
                    currency: 'usd'
                }}
            >
                <StripeCheckoutPage amount={amount} />
            </Elements>

        </div>
    )
}

export default StripePayment