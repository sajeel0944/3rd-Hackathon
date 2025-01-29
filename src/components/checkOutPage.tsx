"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionLast from "@/components/SectionLast";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

type checkOuntInformation = {
  quality: number;
  name: string;
  price: number;
};

function CheckOutPage(props: checkOuntInformation) {

  // ye React-hook-form ka use kia hai
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // is ko form main dia hai jab form fill hoye to ye function chary ga 
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    setorder(true);
  };

  let [checkbox1, setcheckbox1] = useState<boolean>(false);
  let [checkbox2, setcheckbox2] = useState<boolean>(false);

  // ye is liye laga hai ky jab place order par click kro ro to
  let [order, setorder] = useState<boolean>(false);

  const playSound = () => {
    const audio = new Audio("/sound/ringtone-193209.mp3"); // Path to your sound file
    audio.play();
  };

  // is sy ye ho raha hai ky jab place order par click karry gy to ek dropdown open hoye ga to pichay wala page kaam nhi kary ga or scrool bhi nhi hoye ga or is ko last section main dia hai
  useEffect(() => {
    if (order) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [order]);

  return (
    <>
      <Header />

      <Hero put={"Checkout"} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full h-[1690px] flex items-center xl:px-24 lg:px-14 md:px-4  [@media(max-width:767px)]:h-[2540px]">
          <div className=" w-full h-[1590px] flex justify-between [@media(max-width:767px)]:flex-col [@media(max-width:767px)]:h-[2440px]">
            <div className=" w-[49%] h-[1590px] px-12 pt-5 space-y-10 [@media(max-width:767px)]:w-full [@media(max-width:500px)]:px-4">
              <h2 className="font-semibold text-4xl">Billing details</h2>
              <div className=" w-full h-28 flex justify-between">
                <div className=" w-[48%] h-28 space-y-3">
                  <h3 className="font-medium text-base">First Name</h3>
                  <input
                    type="text"
                    className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                  />
                  {typeof errors.firstName?.message === "string" && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className=" w-[48%] h-28 space-y-3">
                  <h3 className="font-medium text-base">Last Name</h3>
                  <input
                    type="text"
                    className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                  />
                  {typeof errors.lastName?.message === "string" && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className=" w-full h-28 space-y-3">
                <h1 className="font-medium">Company Name (Optional)</h1>
                <input
                  type="text"
                  className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                  {...register("companyName")}
                />
              </div>

              <div className=" w-full h-28 space-y-3">
                <h1 className="font-medium">Country / Region</h1>
                <input
                  type="text"
                  className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                  {...register("country", {
                    required: "Country/Region is required",
                  })}
                />
                {typeof errors.country?.message === "string" && (
                  <p className="text-red-500 text-sm">
                    {errors.country.message}
                  </p>
                )}
              </div>

              <div className=" w-full h-28 space-y-3">
                <h1 className="font-medium">Street address</h1>
                <input
                  type="text"
                  className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                  {...register("street", {
                    required: "Street address is required",
                  })}
                />
                {typeof errors.street?.message === "string" && (
                  <p className="text-red-500 text-sm">
                    {errors.street.message}
                  </p>
                )}
              </div>

              <div className=" w-full h-28 space-y-3">
                <h1 className="font-medium">Town / City</h1>
                <input
                  type="text"
                  className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                  {...register("city", { required: "Town/City is required" })}
                />
                {typeof errors.city?.message === "string" && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>

              <div className=" w-full h-28 space-y-3">
                <h1 className="font-medium">Province</h1>
                <input
                  type="text"
                  placeholder="Western Province"
                  className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                  {...register("province", {
                    required: "Province is required",
                  })}
                />
                {typeof errors.province?.message === "string" && (
                  <p className="text-red-500 text-sm">
                    {errors.province.message}
                  </p>
                )}
              </div>

              <div className=" w-full h-28 space-y-3">
                <h1 className="font-medium">ZIP code</h1>
                <input
                  type="text"
                  className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                  {...register("zip", { required: "ZIP code is required" })}
                />
                {typeof errors.zip?.message === "string" && (
                  <p className="text-red-500 text-sm">{errors.zip.message}</p>
                )}
              </div>

              <div className=" w-full h-28 space-y-3">
                <h1 className="font-medium">Phone</h1>
                <input
                  type="number"
                  className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {typeof errors.phone?.message === "string" && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div className=" w-full h-28 space-y-3">
                <h1 className="font-medium">Email address</h1>
                <input
                  type="email"
                  className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {typeof errors.email?.message === "string" && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <input
                type="text"
                placeholder="Additional information"
                className="border border-[#9F9F9F] w-full h-[72px] rounded-[10px]"
                {...register("additionalInfo")}
              />
            </div>

            <div className=" w-[49%] h-[735px] px-12 py-11 [@media(max-width:1190px)]:h-[800px] [@media(max-width:767px)]:w-full [@media(max-width:500px)]:px-4">
              <div className=" w-full h-[610px] space-y-4 [@media(max-width:1190px)]:h-[710px]">
                <div className=" w-full h-[230px] flex border-b border-[#9F9F9F]">
                  <div className=" h-[230px] w-[50%] space-y-8">
                    <h3 className="font-medium text-2xl">Product</h3>
                    <div className="flex">
                      <h5 className="text-black">Total Product</h5>
                      {/* <span className="px-3">X</span>
                    <span>1</span> */}
                    </div>
                    <h5>Subtotal</h5>
                    <h5>Total</h5>
                  </div>
                  <div className=" h-[230px] w-[50%] space-y-8 text-end">
                    <h3 className="font-medium text-2xl">Subtotal</h3>
                    <h5>{props.quality}</h5>
                    <h5>$ {props.price}.00</h5>
                    <h5 className="font-bold text-2xl text-[#B88E2F] [@media(max-width:1190px)]:text-lg">
                      $ {props.price}.00
                    </h5>
                  </div>
                </div>
                {/* <div className="flex items-center justify-between  w-48">
                  <div className="h-[14px] w-[14px] rounded-full bg-black"></div>
                  <h3 className="font-normal text-base">
                    Direct Bank Transfer
                  </h3>
                </div> */}
                <p className="w-full text-sm font-light text-[#9F9F9F]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <div className="flex items-center justify-between  w-48">
                  <div
                    className={`h-[14px] w-[14px] rounded-full border border-black cursor-pointer ${
                      checkbox1 ? "bg-black" : ""
                    }`}
                    onClick={() => {
                      setcheckbox1(!checkbox1);
                    }}
                  ></div>
                  <h3
                    className={`font-medium ${
                      checkbox1 ? "text-black" : "text-[#9F9F9F]"
                    } text-base`}
                  >
                    Direct Bank Transfer
                  </h3>
                </div>

                <div className="flex items-center justify-between  w-48">
                  <div
                    className={`h-[14px] w-[14px] rounded-full border border-black cursor-pointer ${
                      checkbox2 ? "bg-black" : ""
                    }`}
                    onClick={() => {
                      setcheckbox2(!checkbox2);
                    }}
                  ></div>
                  <h3
                    className={`font-medium ${
                      checkbox2 ? "text-black" : "text-[#9F9F9F]"
                    } text-base pr-7`}
                  >
                    Cash On Delivery
                  </h3>
                </div>
                <p className="text-sm font-light ">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-semibold"> privacy policy.</span>
                </p>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className={`w-full h-[60px] mt-6 rounded-md text-white font-semibold text-lg ${"bg-blue-600 hover:bg-blue-700"}`}

                    // className={`border border-black w-[60%] h-16 rounded-2xl flex justify-center items-center cursor-pointer mt-9 ${
                    //   order ? "hidden" : "block"
                    // }`}
                    // onClick={() => {
                    //   setorder(!order);
                    // }}
                  >
                    <span className="text-xl font-normal">Place order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      
      {/* jab place order par click ho ga to ye display block ho jaye ga */}

      <div className={`${
            order ? "block" : "hidden"
          }`}>
        {/* job palce order par click karro gy to us ky baat bg black hoye ga to is ki wajasy hoye ga*/}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-10 ${
            order ? "block" : "hidden"
          }`}
          onClick={() => setorder(false)} // Modal band karne ke liye backdrop par click
        ></div>

        {/*Cash On Delivery par click karro gy to ye chaly ga wana nhi chaly ga  */}
        <div
          className={`fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-lg rounded-xl bg-white w-[90%] md:w-[50%] lg:w-[30%] p-5 ${
            checkbox2 ? "block" : "hidden"
          }`}
        >
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
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              onClick={() => {
                setorder(false);
                playSound();
                // click karny ky ek second baat page reload hoye ga
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }}
            >
              Submit Order
            </button>
            {/* "Submit" button user ko order submit karne ke liye */}
          </div>
        </div>


        {/*Direct Bank Transfer par click karro gy to ye chaly ga wana nhi chaly ga  */}
        <div
          className={`fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-lg rounded-xl bg-white w-[90%] md:w-[50%] lg:w-[30%] p-5 ${
            checkbox1 ? "block" : "hidden"
          }`}
        >
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
          <div className="mt-6 flex justify-center">
            <Link href={"/transaction-amount"}>
            <button
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Transaction Amount
            </button>
            </Link>
            {/* "Submit" button user ko order submit karne ke liye */}
          </div>
        </div>
        {/*  */}
      </div>

      {/* ye footer ky upper wala hai part hai */}

      <SectionLast />

      <Footer />
    </>
  );
}

export default CheckOutPage;
