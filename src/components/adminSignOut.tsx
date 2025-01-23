"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function AdminSignOut() {
  let [signout, setsignout] = useState<boolean>(false);

  let [loading, setloading] = useState<boolean>(false);

  const route = useRouter();
  // is fountion ko nichy sign out ky buttom main fia hai
  const pushnavigate = () => {
    // is ky zayeye home page par gaye gy
    route.push("/");
  };
  return (
    <>
      {/* is buttom par click karro gy to sign out ka page open ho jaye ga */}
      <span
        onClick={() => {
          setsignout((signout = true));
        }}
        className="cursor-pointer hover:text-blue-400"
      >
        Sign out
      </span>

      <div>
        {/* jo pichy balck color araha hai wo is ki waja sy araha hai */}
        <div
          className={`fixed inset-2  bg-black bg-opacity-50 z-10 -mt-2 -ml-2 -mb-2 ${
            signout ? "block" : "hidden"
          }`}
        ></div>

        {/* ye sign out ka page hai */}
        <div
          className={`fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  shadow-lg rounded-xl ${loading ? "" : "bg-white boder-2 border-white"}  w-[90%] md:w-[50%] lg:w-[30%] p-5 ${
            signout ? "block" : "hidden"
          }`}
        >
          <div className={`${loading ? "hidden" : "block"}`}>
            <p className="text-black">
              Sign out allows the admin to securely log out from the system,
              ending their active session. This ensures the safety of sensitive
              data and prevents unauthorized access.
            </p>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
              <p></p>
              <button
                className={`px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 `}
                onClick={() => {
                  setloading((loading = true));
                  setTimeout(() => {
                    pushnavigate();
                  }, 3000);
                }}
              >
                Sign out
              </button>
            </div>
          </div>

          {/* is main loadong image hai */}
          <div className={`${loading ? "block " : "hidden"}`}>
            <Image
              src={"/picture/loading.png"}
              alt={""}
              width={90}
              height={90}
              className="mx-auto size-5 animate-spin h-20 w-20  "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSignOut;
