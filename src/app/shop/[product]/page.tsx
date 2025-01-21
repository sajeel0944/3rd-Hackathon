

import Image from "next/image";
import ProduntDetail from "@/components/produntDetail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// make new  page


async function Product({ params }: { params: { product: string } }) {
 

  let get: string =params.product;
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

    // upper params sy jo value arahe hai us ko number main convert kar rahy hai or is ko mein nichy id main pass karar hai ho
    let id=Number(get);
   

  return (
    <>
      <Header />
    
      <ProduntDetail image={data[get].imageUrl} image1={data[get].imageUrl} image2={data[get].imageUrl} image3={data[get].imageUrl} image4={data[get].imageUrl}
      discribtion={data[get].description} price={data[get].price} name={data[get].title} id={id} Category={data[get].tags} Sku="asas"/>

      <Footer />
    </>
  );
}

export default Product;
