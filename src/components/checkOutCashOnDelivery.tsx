// is ko checkOutPage ky andar di a hai

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

type cash = {
  quality: number;
  price: number;
};

function CheckOutCashOnDelivery(props: cash) {
  let [loading, setloading] = useState<boolean>(false);

  const route = useRouter();

  const handleRoute = () => {
    setloading((loading = true));
    setTimeout(() => {
      route.push("/card/checkout/order-information");
    }, 9000);

    setTimeout(() => {
      window.location.reload();
    }, 10000);
  };
  return (
    <>
      {/* Modal Header */}
      <div className="w-full border-b border-gray-300 pb-4 mb-4">
        <h3 className="font-semibold text-lg">Order Summary</h3>
        {/* Header main "Order Summary" likha hai */}
      </div>
      {/* Order Details */}
      <div className="space-y-4">
        {/* Product Quantity */}
        <div className="flex justify-between">
          <span>Total Product:</span>
          <span>{props.quality}</span>
          {/* Product ki quantity show kar raha hai */}
        </div>

        {/* Product Price */}
        <div className="flex justify-between">
          <span>Price:</span>
          <span>$ {props.price}.00</span>
          {/* Product ka price show kar raha hai */}
        </div>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>$ {props.price}.00</span>
          {/* Total price display kar raha hai */}
        </div>
      </div>
      {/* Submit Button */}
      <div className="mt-6 flex justify-center">
        <button
          className={`px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 ${loading ? "hidden" : "block"}`}
        //   is ko upper dia hai
          onClick={handleRoute}
        >
          Submit Order
        </button>

        <div
          className={`px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-center ${loading ? "block " : "hidden"}`}
        >
          <Image
            src={"/picture/loading.png"}
            alt={""}
            width={90}
            height={90}
            className="mx-auto size-5 animate-spin h-8 w-8  "
          />
        </div>

        {/* "Submit" button user ko order submit karne ke liye */}
      </div>
    </>
  );
}

export default CheckOutCashOnDelivery;
