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

  // return NextResponse.json({
  //   message: "Data saved for 7 minutes!",
  //   cart: saveDataSanity,
  // });
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
    // ye jab cahly ag jab is main string aye ga to ye cahly ga or string CheckOutPage waly component ky
    //  andar line number 92 main dia hai or jab Place order par click karro gy to sary product delete hoja
    //  ye gy is sy add to card ka sara bata delete hojaye ga

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
  }else{
  //is ky andar number arahy hai or is ko DeleteAddCardProduct comonent ky andar dia hai is sy jo product delete karna chata hai bas wo he product delete hoye gy
  // Remove the specified index
  saveDataSanity.splice(index, 1);
  // is ky andar 1 is liye minus kia hai q ky fontend ky andar mein index ky andar 1 plus kary send karar hai ho q ky saveDataSanity ky andar ek default value mein di hoye hai lakin saveDataQuality ky andar q ye default value nhi hai
  saveDataQuality.splice(index - 1, 1);
  }
  return NextResponse.json({ message: "Item deleted successfully" });
}
