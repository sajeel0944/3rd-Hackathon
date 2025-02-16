import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeScrollImageSection from "@/components/homeScrollImageSection";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";



// is ky zaraye jab bhi sanity main bata update ya new data dy ragy to to is ky zaraye wo UI main ek second ky baat nazar aye ga
export const revalidate=1;


export default async function Home() {
  const data = await client.fetch(`*[_type=="product"]{
      _id,
      title,
      "imageUrl" :productImage.asset -> url,
      price,
      tags,
      dicountPercentage,
      description,
      isNew
  }[0..7]`);

  return (
    <>
      <Header />

      <section className="relative bg-gray-50 py-16 px-6 md:py-24 md:px-12 xl:flex xl:items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/picture/scandinavian-interior-mockup-wall-decal-background 1.png"
            alt="Background Image"
            width={1100}
            height={549}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 bg-white bg-opacity-90 p-6 rounded-lg md:max-w-lg xl:ml-auto xl:p-12">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
            New Arrival
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 md:text-5xl">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50">
            BUY NOW
          </button>
        </div>
      </section>

      {/* Browse The Range */}

      <div className="min-h-screen bg-gray-100 p-6  pt-16 [@media(max-width:767px)]:h-[1670px]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">
            Browse The Range
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7  md:h-[500px] [@media(max-width:767px)]:h-[1400px]">
            {/* Dining */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <Image
                src="/picture/Mask Group (1).png"
                alt="Dining"
                width={170}
                height={170}
                className="w-full h-48 object-cover md:h-[450px] [@media(max-width:767px)]:h-[370px]"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">Dining</h2>
              </div>
            </div>
            {/* Living */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <Image
                src="/picture/Mask Group.png"
                alt="Living"
                width={170}
                height={170}
                className="w-full h-48 object-cover md:h-[450px] [@media(max-width:767px)]:h-[370px]"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">Living</h2>
              </div>
            </div>
            {/* Bedroom */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <Image
                src="/picture/image-last.png"
                alt="Bedroom"
                width={170}
                height={170}
                className="w-full h-48 object-cover md:h-[450px] [@media(max-width:767px)]:h-[370px]"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">Bedroom</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products */}

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product: any,index:number) => (
              <div
                key={product.id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <Link href={`/shop/${product._id}`}>
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
                      $ {product.price}
                    </span>
                    {/* {product.price &&  ( */}
                    <span className="text-sm line-through text-gray-500 ml-2">
                      {/* is ky andar jo product ki value arahe hai us ko 100 sy division kia us ky baat 110 sy multiple kia or toFixed use kis q ky . ky baat bahot sary number arahy thy */}
                      $ {((product.price / 100) * 110).toFixed(2)}
                    </span>
                    {/* )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Show More
            </button>
          </div>
        </div>
      </div>

      {/* slider section hai*/}
      <HomeScrollImageSection />

      {/* last image part */}

      <div className="p-4 bg-gray-100  [@media(max-width:500px)]:-mt-7 mb-20">
        <h1 className="text-center text-2xl font-bold mb-4">
          #FuniroFurniture
        </h1>
        <Image
          src={"/picture/last-image.png"}
          alt={""}
          width={1800}
          height={400}
          className="w-full mt-9"
        />
      </div>

      <Footer />
    </>
  );
}
