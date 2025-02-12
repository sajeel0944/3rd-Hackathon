// // ye stripe ki waja sy use kar raha ho or is ko CheckOutPage compnent main dia hai

"use client";

import convertToSubCurrency from "../lib/ConvertToSubCurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutPage from "./stripeCheckOut";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const StripePayment = () => {
  
  // is kyandar cutomer ka sara bata araha hai
  const [sanityCustomerInfo, setSanityCustomerInfo] = useState<any>([]);
  let total=0

  useEffect(() => {
    async function findSanity() {
      try {
        //is ky andar customer ki information arahe hai sanity sy  or  jab mein sanity ky anadr bata push kar raha tha to
        // wo api data api ky andar mid  main araha tha is sy "| order(_createdAt asc)" ye hoye ga ky jo data mein do ga wo
        //  end main aye ga "| order(_createdAt asc)"
        const sanityFetchData = await client.fetch(
          `*[_type=="customer"] | order(_createdAt asc)`
        );
        setSanityCustomerInfo(sanityFetchData);
      } catch (error) {
        console.error("Error fetching customer data from Sanity:", error);
      }
    }

    findSanity();
  }, []);

  // jab page reload ho ta hai to sanityCustomerInfo is ky andar data aye main time lagy ga gab tak bata nhi ho to ye aye ga
  if (sanityCustomerInfo.length <= 0) {
  //  agar  sanityCustomerInfo ky nadar value nhi hoye gi to total ky nadar ye  jaye ga
    total=0.5
  }else{
    // agar sanityCustomerInfo ky andar value ajaye gi to ye chaly ga
    const userInformation = sanityCustomerInfo[sanityCustomerInfo.length - 1];

    // is ky andar total amount araha jo user ny add to card kia tha  or sanity sy arahe hai
    const totalPrice = userInformation.cart.reduce(
      (acc: number, product: any, index: number) => {
        const quantity = userInformation.productquality[index]?.quality || 1; // Default quantity = 1 if not found
        return acc + product.price * quantity;
      },
      0
    );

    // is ky andar totalprice ki value jarahe hai
    total=totalPrice
  
  }
  
  const amount = total;
  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubCurrency(amount),
          currency: "usd",
        }}
      >
        <StripeCheckoutPage amount={amount} />
      </Elements>
    </div>
  );
};

export default StripePayment;
