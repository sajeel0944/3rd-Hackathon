"use client";

import ProduntDetail from "@/components/produntDetail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

function Product({ params }: { params: { product: string } }) {
  // is ky andar sary product arahy hai
  let [data, setData] = useState<any[]>([]);

  let [loading, setLoading] = useState(true); //  Loading state

  // upper params sy jo product ki id arahe hai us ko gey karraha ho or is ko mein nichy id main pass karar hai ho
  let get: string = params.product;

  useEffect(() => {
    async function fetchData() {
      try {
        const sanityData = await client.fetch(`*[_type=="product"]{
          _id,
          title,
          "imageUrl" : productImage.asset -> url,
          price,
          tags,
          dicountPercentage,
          description,
          isNew
        }`);
        setData(sanityData);
        setLoading(false); //  Stop loading after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  //  loading ki value true  ho ki to ye cahly ga or false hogi to nichy wala main chary ga or jab useEffect cahly ga to is ki value false ho gaye gi
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  // findIndex data ky andar jitny bhi array hai un sab ki id ko check karry ga ky kon sa array ki value get sy match ho rahe hai bas u se array ko pass
  const findProductId = data.find((product) => product._id === get);

  // agar findProductId ky nadar koye bhi product filter nhi hoga to us ki value false hogi to phir ye chaly ga
  if (!findProductId) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl font-semibold text-red-500">Product not found!</p>
      </div>
    );
  }


  return (
    <>
      <Header />
      <ProduntDetail
        image={findProductId.imageUrl}
        image1={findProductId.imageUrl}
        image2={findProductId.imageUrl}
        image3={findProductId.imageUrl}
        image4={findProductId.imageUrl}
        discribtion={findProductId.description}
        price={findProductId.price}
        name={findProductId.title}
        id={findProductId._id}
        Category={findProductId.tags}
        Sku="asas"
      />
      <Footer />
    </>
  );
}

export default Product;
