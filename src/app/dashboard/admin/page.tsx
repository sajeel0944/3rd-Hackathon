"use client";

import AdminSignOut from "@/components/adminSignOut";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  let [data, setdata] = useState([]);
  let [search, setsearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        // is ky nadar sanity data fetch horaha hai
        const getData = await client.fetch(`*[_type=="product"]{
          _id,
          title,
          "imageUrl" :productImage.asset -> url,
          price,
          tags,
          dicountPercentage,
          description,
          isNew
      }`);
        // setdata upper usesatae ka variable us main or setdata ky nadar sanityData ka data jaraha hai
        setdata(getData);
      } catch (error) {
        console.log("error feching data ⚠️⚠️" + error);
      }
    }
    // is ky function ko call kar raha ho
    fetchData();
  });

  // filter  data ky nadar ek ek array ko check kary ka jo array ki value true hogi wo array pass hoye ga
  let filterProduct = data.filter((product: any) =>
    //includes   product.title.toLowerCase() or  searchQuery.toLowerCase()  ko check kary ga ky agar dono ki value same
    //hogi to true hoye ga wo arry upper filteredProducts main save hoye ga or agar false hoye ga wo pass nhi hoye ga
    product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Furniture Admin</h2>
        <ul className="space-y-10">
          <li className="mb-4">
            <Link href="#" className="hover:text-blue-400">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:text-blue-400">
              Manage Products
            </Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:text-blue-400">
              Orders
            </Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:text-blue-400">
              Customers
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-400">
              Settings
            </Link>
          </li>
          <li>
            {/* <Link href="/" className="hover:text-blue-400"> */}
            <AdminSignOut />
            {/* </Link> */}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <Link href={"/dashboard/admin/productAdd"}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Add Product
            </button>
          </Link>
        </div>

        {/* Furniture Management Section    */}

        <div>
          {/* is main search ho raha hai */}
          <div className="relative mb-6 lg:w-[45%] md:w-[50%]">
            <input
              value={search}
              onChange={(event) => {
                setsearch(event.target.value);
              }}
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="absolute right-3 top-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.547 3.082l4.338 4.339a1 1 0 11-1.414 1.414l-4.339-4.338A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* is main ternary operator use kia hai agar filteredProducts ki value 0 sy bary hai to true hoye ga or agar 0 sy choti hai to false karry ga*/}
            {filterProduct.length > 0 ? (
              //  agar filteredProducts ky andar value hoye gi to ye chaly ga
              filterProduct.map((product: any, index: number) => (
                <div
                  key={product.id}
                  className="relative bg-white rounded-lg shadow-md overflow-hidden group"
                >
                  <Link href={"#"}>
                    <div className="relative">
                      <Image
                        src={`${urlFor(product.imageUrl)}`}
                        alt={product.name}
                        width={170}
                        height={150}
                        className="w-full h-48 object-cover"
                      />

                      {/* Hover overlay   */}
                      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                          Edit
                        </button>

                        {/* </Link> cancel this  */}
                      </div>
                    </div>
                  </Link>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-gray-600">{product.tags[2]}</p>
                  </div>
                </div>
              ))
            ) : (
              //  agar filteredProducts ky andar value nhi hai to ye cahry ga
              <p className="text-center text-gray-500 col-span-4 mt-40">
                No products found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
