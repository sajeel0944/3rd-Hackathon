"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  let [display, setdisplay] = useState<boolean>(false);
  // console.log(display);

  // ye is liye dia hai takk navbar par jitni bhi add card ho gy utny number show karry ga
  const [find, setFind] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/addToCard`, {
        cache: "no-store",
      });
      const convert = await url.json();
      const length = convert[0]?.length - 1 || 0; // Data ko default zero karo agar kuch na aaye
      // Yeh line state variable find ko update kar rahi hai jo baad mein render hoga UI mein.
      setFind(length);
    };

    fetchData();
  }, []);

  return (
    <header
      className={`${display ? "[@media(max-width:768px)]:h-[220px] " : "h-[100px] items-center"} flex justify-between  px-16 py-4 shadow-md [@media(max-width:640px)]:px-2 bg-[#FFFFFF]`}
    >
      {/* Logo */}
      <div className={`flex  space-x-2 ${display ? "" : "items-center"}`}>
        <div className="text-yellow-500 text-2xl ">
          <Image
            src={"/picture/Meubel House_Logos-05.png"}
            alt={"logo"}
            width={40}
            height={26}
          />
        </div>
        <span className="text-2xl font-bold">Furniro</span>
      </div>

      {/* Navigation */}
      <nav
        className={`flex space-x-6  "[@media(max-width:768px)]:border-2 ${
          display ? "block" : "[@media(max-width:768px)]:hidden"
        } [@media(max-width:768px)]:absolute [@media(max-width:768px)]:top-[60px] [@media(max-width:768px)]:left-[35%] [@media(max-width:768px)]:h-40 [@media(max-width:768px)]:flex-col [@media(max-width:768px)]:space-x-0 [@media(max-width:768px)]:w-[35%] [@media(max-width:768px)]:items-center [@media(max-width:768px)]:space-y-3 [@media(max-width:768px)]:text-xl [@media(max-width:768px)]:pt-2 [@media(max-width:768px)]:font-extrabold [@media(max-width:768px)]:rounded-lg `}
      >
        <Link href="/" className="text-gray-700 hover:text-black ">
          Home
        </Link>
        <Link href="/shop" className="text-gray-700 hover:text-black">
          Shop
        </Link>
        <Link href="/blog" className="text-gray-700 hover:text-black">
          Blog
        </Link>
        <Link href="/contant" className="text-gray-700 hover:text-black">
          Contact
        </Link>
      </nav>

      {/* Icons */}
      <div
        className={`flex ${display ? "" : "items-center"} space-x-7 [@media(max-width:480px)]:space-x-5 [@media(max-width:400px)]:w-[40%] [@media(max-width:380px)]:ml-5 `}
      >
        <Link href={"/order-information"}>
          <Image
            src={"/picture/mdi_account-alert-outline.png"}
            alt={"logo"}
            width={28}
            height={28}
            className="cursor-pointer [@media(max-width:440px)]:w-[100%] [@media(max-width:440px)]:h-6 "
          />
        </Link>

        {/* <Link href={"/order-information"}>
          <Image
            src={"/picture/bad1.png"}
            alt={"logo"}
            width={38}
            height={38}
            className="cursor-pointer  [@media(max-width:440px)]:w-[100%] [@media(max-width:440px)]:h-6"
          />
        </Link> */}

        <Link href={"/card"}>
          <div className="flex">
            {/* Agar find ki value null nahin hai, toh length dikhai jayegi. Agar null hai (matlab data abhi load ho raha hai), toh 'Loading...' text dikhaya jayega. or find uppar ida hai */}
            <span className="text-base text-white bg-red-500 px-1 h-5 items-center justify-center flex rounded-full absolute ml-4 -mt-2">
              {find !== null ? find : "Loading..."}
            </span>
            <Image
              src={"/picture/ant-design_shopping-cart-outlined.png"}
              alt={"logo"}
              width={28}
              height={28}
              className="cursor-pointer [@media(max-width:440px)]:w-[100%] [@media(max-width:440px)]:h-6"
            />
          </div>
        </Link>

        <div>
          {/* ye clerk.js ky components hai  */}
          <SignedOut>
            <div className=" ">
              <SignInButton>
                <button className="bg-yellow-600 text-white px-1 py-1  rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 [@media(max-width:440px)]:text-xs">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center justify-end  ">
              <UserButton
                appearance={{
                  elements: {
                    userButtonTrigger:
                      "px-1 py-1   text-white font-medium rounded  transition",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden "
        onClick={() => {
          setdisplay(!display);
        }}
      >
        <Image
          src={"/picture/three-row-icon.png"}
          alt={"logo"}
          width={28}
          height={28}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
