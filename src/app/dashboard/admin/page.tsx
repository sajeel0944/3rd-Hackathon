// pages/admin.tsx
import AdminSignOut from "@/components/adminSignOut";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AdminPage = async () => {
  const data = await client.fetch(`*[_type=="product"]{
      _id,
      title,
      "imageUrl" :productImage.asset -> url,
      price,
      tags,
      dicountPercentage,
      description,
      isNew
  }`);

  return (
    <div className="flex h-full bg-gray-100">
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
              <AdminSignOut/>
            {/* </Link> */}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add Product
          </button>
        </div>

        {/* Furniture Management Section */}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product: any, index: number) => (
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

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Edit
                      </button>

                      {/* </Link> cancel this*/}
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-gray-600">{product.tags[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
