"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

export default function Login() {
  const router = useRouter();

  // is ky andar user ka name ara ha hai
  const userName = useRef<HTMLInputElement>(null);
  // is ky andar user ka password ara ha hai
  const userPassword = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    const getUserNAme = userName?.current?.value;
    const getPassword = userPassword?.current?.value;

    const url = await fetch("https://3rd-hackathon.vercel.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: getUserNAme,
        password: getPassword,
      }),
    });

    const data = await url.json();

    // is ky andar ye hai ky agar data.user ky andar value ho to router pass karry data.user agar data.user nhi ho ho false ho jaye gi  route ko upper dia howa hai
    if (data.user) {
      router.push(data.user);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Only Admin Login
        </h2>

        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              ref={userName}
              id="username"
              type="text"
              placeholder="Enter your username"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Password Input  */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              ref={userPassword}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Submit Button  */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>

        {/* Footer Text  */}
      </div>
    </div>
  );
}
