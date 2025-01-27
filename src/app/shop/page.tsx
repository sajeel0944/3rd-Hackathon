import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionLast from "@/components/SectionLast";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// is ky zaraye jab bhi sanity main bata update ya new data dy ragy to to is ky zaraye wo UI main ek second ky baat nazar aye ga
export const revalidate=1;


async function Shop() {  

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
    <>
   
      <Header />

      {/* hero section hai */}
      <Hero put="Shop" />

      {/* filter */}

      <div className="bg-beige-100 p-4 border-b border-gray-200 bg-[#F9F1E7]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg text-sm font-medium">
              <span className="mr-2">Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5.36 5.36a1 1 0 00-.293.707v4.586a1 1 0 01-.293.707l-1 1A1 1 0 0112 20v-3H8v3a1 1 0 01-1.707.707l-1-1a1 1 0 01-.293-.707v-4.586a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-gray-200 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <button className="p-2 bg-gray-200 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6h4M6 10h12M10 14h4M6 18h12"
                  />
                </svg>
              </button>
            </div>
            <span>Showing 1-16 of 32 results</span>
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <label className="mr-2 text-sm font-medium">Show</label>
              <input
                type="number"
                className="w-16 px-2 py-1 border border-gray-300 rounded-lg text-sm"
                value={16}
                readOnly
              />
            </div>
            <div>
              <label className="mr-2 text-sm font-medium">Sort by</label>
              <select className="px-2 py-1 border border-gray-300 rounded-lg text-sm">
                <option>Default</option>
                <option>Price</option>
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div />

      {/* image */}

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product:any,index:number) => (
              <div
                key={product.id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <Link href={`/shop/${index}`}>
                  <div className="relative">
                    <Image
                      src={`${urlFor(product.imageUrl)}`}
                      alt={product.name}
                      width={170}
                      height={150}
                      className="w-full h-48 object-cover"
                    />
                    {/* {product.dicountPercentage && ( */}
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{product.dicountPercentage}
                      </span>
                    {/* )} */}
                    {!product.dicountPercentage && (
                      <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        New
                      </span>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* <Link href={product.name}>  cancel this*/}
                      <button className="bg-white text-black px-4 py-2 mb-2 rounded">
                        {/* Add to Cart cancel this */}
                        Buy Now
                      </button>
                      {/* </Link> cancel this*/}
                      <div className="flex space-x-4 text-white">
                        <button className="hover:text-yellow-500 flex items-center">
                          <Image
                            src={"/picture/gridicons_share.png"}
                            alt={"share"}
                            width={12}
                            height={12}
                            className="mr-1 "
                          />
                          Share
                        </button>
                        <button className="hover:text-yellow-500  flex items-center">
                          <Image
                            src={"/picture/compare-svgrepo-com 1.png"}
                            alt={"share"}
                            width={12}
                            height={12}
                            className="mr-1 "
                          />
                          Compare
                        </button>
                        <button className="hover:text-yellow-500  flex items-center">
                          {" "}
                          <Image
                            src={"/picture/Heart.png"}
                            alt={"share"}
                            width={12}
                            height={12}
                            className="mr-1 "
                          />
                          Like
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-gray-600">{product.tags[2]}</p>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-gray-800">
                      Rs {product.price}
                    </span>
                    {/* {product.price &&  ( */}
                      <span className="text-sm line-through text-gray-500 ml-2">
                        {/* is ky andar jo product ki value arahe hai us ko 100 sy division kia us ky baat 110 sy multiple kia or toFixed use kis q ky . ky baat bahot sary number arahy thy */}
                       Rs {(product.price / 100 * 110).toFixed(2)}
                      </span>
                    {/* )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center space-x-6">
            <button className="bg-[#FAF3EA] hover:text-white px-4 py-2 rounded hover:bg-yellow-600">
              1
            </button>
            <button className="bg-[#FAF3EA] hover:text-white px-4 py-2 rounded hover:bg-yellow-600">
              2
            </button>
            <button className="bg-[#FAF3EA]  hover:text-white  px-4 py-2 rounded hover:bg-yellow-600">
              3
            </button>
            <button className="bg-[#FAF3EA]  hover:text-white px-4 py-2 rounded hover:bg-yellow-600">
              Next
            </button>
          </div>
        </div>
      </div>

      <SectionLast />

      <Footer />
    </>
  );
}

export default Shop;
