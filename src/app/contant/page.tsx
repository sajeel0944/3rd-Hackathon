"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SectionLast from "@/components/SectionLast";

function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  let [sub, setsub] = useState<boolean>(false);
  console.log(sub);

  useEffect(() => {
    if (sub == true) {
      alert("From has been submitted");
    }
  }, [sub]);
  return (
    <>
      <Header />

      {/* ye hero section hai */}
      <Hero put="Contant" />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full ">
          {/* Header Section */}
          <h1 className="text-3xl font-bold text-center mb-2">
            Get In Touch With Us
          </h1>
          <p className="text-center text-gray-600 mb-8 text-sm">
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
          <div className="md:flex md:justify-around">
            {/* Information Section */}
            <div className="grid grid-cols-1  gap-6 mb-8 md:w-[22%]">
              <div>
                <Image
                  src={"/picture/location.png"}
                  alt={"location"}
                  width={20}
                  height={20}
                  className="absolute"
                />
                <div className="text-lg font-semibold pl-6">Address</div>
                <p className="text-gray-600 text-sm pl-6">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
              <div>
                <Image
                  src={"/picture/bxs_phone.png"}
                  alt={"phone"}
                  width={20}
                  height={20}
                  className="absolute"
                />
                <div className="text-lg font-semibold pl-6">Phone</div>
                <p className="text-gray-600 text-sm pl-6">
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-gray-600 text-sm pl-6">
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <Image
                  src={"/picture/bi_clock-fill.png"}
                  alt={"clock"}
                  width={20}
                  height={20}
                  className="absolute"
                />
                <div className="text-lg font-semibold pl-6">Working Time</div>
                <p className="text-gray-600 text-sm pl-6">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="text-gray-600 text-sm pl-6">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6  md:w-[50%]">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Abc"
                  className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Abc@def.com"
                  className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="This is an optional"
                  className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I'd like to ask about"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-">
                <button
                  type="submit"
                  className="w-[40%] bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition"
                  onClick={() => {
                    setsub(!sub);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* last section */}

      <SectionLast />

      <Footer />
    </>
  );
}

export default Contact;
