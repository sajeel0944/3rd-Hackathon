"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

interface IParams {
  searchParams: {
    amount: number;
  };
}

// searchParams is ky andar jo customer BY kary ga us ki amount is main aye gi  or StripePayment component ky zayeye amount ayegi darak amount nhi arahe gumphil ky amount arahe hai
const PaymentSuccess = ({ searchParams }: IParams) => {
  // is ky andar current date araha hai
  const currentDate = new Date().toLocaleDateString("en-GB");

  // is ky andar current time araha hai
  const currentTime = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  let [loading,setloading]=useState<boolean>(false);

  const route = useRouter();

  const handleRoute = () => {
    setloading(loading=true)
    setTimeout(() => {
      route.push("/card/checkout/order-information");
    }, 9000);

    setTimeout(() => {
        window.location.reload();
    }, 10000);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
          <div className="text-green-500 text-6xl mb-4">✔</div>
          <h1 className="text-2xl font-bold text-gray-800">Payment Received</h1>
          <p className="text-gray-600 mt-2">
            Thank you! Your payment has been successfully processed.
          </p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Transaction Details
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg mt-2 text-gray-600">
              <p>
                {/* is ky andar jo customer BY kary ga us ki amount is main aye gi  is ko upper function ky parameter main dia hai */}
                <strong>Transaction Amount : </strong> $ {searchParams.amount}
              </p>
              <p>
                {/* is ky andar current time araha hai */}
                <strong>Transaction Time : </strong> {currentTime}
              </p>
              <p>
                <strong>Transaction Date : </strong> {currentDate}
              </p>
            </div>
          </div>
          {/* <Link href={"/card/checkout/order-information"}> */}
            <button className={`mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition ${loading? "hidden" :"inline-block"}`} onClick={handleRoute}>
              Order Details
            </button>

             <div className={`mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg ${loading ? "block " : "hidden"}`}>
                                <Image
                                  src={"/picture/loading.png"}
                                  alt={""}
                                  width={90}
                                  height={90}
                                  className="mx-auto size-5 animate-spin h-8 w-8  "
                                />
                              </div>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
