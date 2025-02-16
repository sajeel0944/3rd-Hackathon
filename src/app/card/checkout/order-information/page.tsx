"use client";

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const OrderInformationStroge = () => {

  
  // is kyandar cutomer ka sara bata araha hai
  const [sanityCustomerInfo, setSanityCustomerInfo] = useState<any>([]);

  useEffect(() => {
    setTimeout(()=>{
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
  },5000)
  }, []);

  // jab page reload ho ta hai to sanityCustomerInfo is ky andar data aye main time lagy ga gab tak bata nhi ho to ye aye ga
  if (sanityCustomerInfo.length <= 0) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      </>
    );
  }

  // is ko is liye dia hai taky jo bhi user information dy ga wo sanity ky array main jaye gi last main is liye jo bhi array ky last main objech hoye ga wo is main aye ga
  const userInformation = sanityCustomerInfo[sanityCustomerInfo.length - 1];
  // console.log(userInformation);

  // is ky andar total amount araha jo user ny add to card kia tha  or sanity sy arahe hai
  const totalPrice = userInformation.cart.reduce(
    (acc: number, product: any, index: number) => {
      const quantity = userInformation.productquality[index]?.quality || 1; // Default quantity = 1 if not found
      return acc + product.price * quantity;
    },
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Order Information
        </h1>

        {/* Billing Details */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 py-5">Billing Details</h2>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {userInformation.firstName}{" "}
              {userInformation.lastName}
            </p>
            <p>
              <strong>Company:</strong> {userInformation.Company}
            </p>
            <p>
              <strong>Address:</strong> {userInformation.address},{" "}
              {userInformation.City}, {userInformation.Province},{" "}
              {userInformation.ZIP}, {userInformation.Country}
            </p>
            <p>
              <strong>Phone:</strong> {userInformation.Phone}
            </p>
            <p>
              <strong>Email:</strong> {userInformation.Email}
            </p>
            <p>
              <strong>Additional Info:</strong> {userInformation.Additional}
            </p>
          </div>
        </div>

        {/* Product Details */}

        <div className="mb-6">
          <h2 className="text-3xl font-bold  py-5">Product Details</h2>
          {userInformation.cart.map((manageDateil: any, index: number) => {
            return (
              <>
                <div className="space-y-4">
                  {/* Sample product details */}
                  <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center justify-center space-x-5 mt-2">
                      {/* is ky andar product ki counting arahe hai */}
                      <span>{index +1}</span>
                      <Image
                        src={`${manageDateil.imageUrl}`}
                        alt="Asgaard Sofa"
                        width={80}
                        height={80}
                        className="w-16 h-16 rounded object-cover"
                      />
                    </div>
                    {/* is ky andar product ka name araha hai */}
                    <p className="text-gray-700">{manageDateil.title}</p>
                    <p className="text-gray-700">
                      {" "}
                      {/* // ek main product ki quality aye gi or dosary main product ki prices aye gi */}
                      {userInformation.productquality[index].quality} x ${" "}
                      {manageDateil.price}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* Total Amount */}
        <div className="mb-6 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Total Amount</h2>
            {/* is ky andar jitny bhi product hai un ki total price aye gi */}
            <p className="text-gray-700">${totalPrice}</p>
          </div>
          <div className=" border-black text-center">
            <h5 className="text-xl font-semibold mb-2">Your Tracking ID</h5>
            {/* is ky andar customer ki id ki arahe hai */}
            <h5>{userInformation._id}</h5>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href={"/"}>
            <button className="w-full sm:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Continue Shopping
            </button>
          </Link>
          {/* <button className="w-full sm:w-auto bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700" onClick={()=>{window.print()}}>
            Print
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default OrderInformationStroge;
