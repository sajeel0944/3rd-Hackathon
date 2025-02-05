// import { client } from "@/sanity/lib/client";
// import { NextRequest, NextResponse } from "next/server";

// const saveDataSanity:any[]=[
//     {
//         price: "",
//         isNew: false,
//         _id: "qQpkQmFIZ2DSQkhvXBfW85",
//         title: "" ,
//         imageUrl: "",
//         dicountPercentage: 0
//     }
// ]

// const saveDataQuality:any[]=[]

// export function GET(){
//     return NextResponse.json([saveDataSanity,saveDataQuality])
// }

// export async function POST(request:NextRequest){
//     const data= await request.json();

//     const sanityData = await client.fetch(`*[_type=="product"]{
//           _id,
//           title,
//           "imageUrl" :productImage.asset -> url,
//           dicountPercentage,
//           price,
//           isNew
//       }`);

//     const set=sanityData[data.arratIdNumber];

//     saveDataSanity.push(set)

//     saveDataQuality.push(data.quality)
// }

import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

let saveDataSanity: any[] = [
  {
    price: "",
    isNew: false,
    _id: "qQpkQmFIZ2DSQkhvXBfW85",
    title: "",
    imageUrl: "",
    dicountPercentage: 0,
  },
];
let saveDataQuality: any[] = [];

// Function to clear data after 7 minutes
const clearData = () => {
  setTimeout(
    () => {
      saveDataSanity = [
        {
          price: "",
          isNew: false,
          _id: "qQpkQmFIZ2DSQkhvXBfW85",
          title: "",
          imageUrl: "",
          dicountPercentage: 0,
        },
      ];
      saveDataQuality = [];
      console.log("Cart data cleared after 3 minutes!");
    },
    7 * 60 * 1000
  ); // 7 minutes
};

export function GET() {
  return NextResponse.json([saveDataSanity, saveDataQuality]);
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const sanityData = await client.fetch(`*[_type=="product"]{
        _id,
        title,
        "imageUrl" :productImage.asset -> url,
        dicountPercentage,
        price,
        isNew
    }`);

  let productId: string = data.arratIdNumber;

  // filter  sanityData ky nadar ek ek array ko check kary ka jo array ki value true hogi wo array pass hoye ga
  let filterProduct = sanityData.filter((product: any) =>
    //includes   product._id.toLowerCase() or  productId.toLowerCase()  ko check kary ga ky agar dono ki value same
    //hogi to true hoye ga wo arry upper filteredProducts main save hoye ga or agar false hoye ga wo pass nhi hoye ga
    product._id.toLocaleLowerCase().includes(productId.toLocaleLowerCase())
  );


  // filterProduct main jo product arahy hai wo array ky andar object araha hai or mujy bas object cahaye to is liye ye dia hai filterProduct[0]
  saveDataSanity.push(filterProduct[0]);
  saveDataQuality.push(data.quality);

  console.log("Data added to cart:", saveDataSanity);

  // Auto-clear data after 3 minutes
  clearData();

  return NextResponse.json({
    message: "Data saved for 7 minutes!",
    cart: saveDataSanity,
  });
}

export async function DELETE(request: NextRequest) {
  const getData = await request.json();

  // Validate index
  const index = getData.arrayIndexValue;
  if (
    typeof index !== "number" ||
    index < 0 ||
    index >= saveDataSanity.length
  ) {
    return NextResponse.json({ error: "Invalid index" }, { status: 400 });
  }

  // Remove the specified index
  saveDataSanity.splice(index, 1);
  // is ky andar 1 is liye minus kia hai q ky fontend ky andar mein index ky andar 1 plus kary send karar hai ho q ky saveDataSanity ky andar ek default value mein di hoye hai lakin saveDataQuality ky andar q ye default value nhi hai
  saveDataQuality.splice(index - 1, 1);

  return NextResponse.json({ message: "Item deleted successfully" });
}
