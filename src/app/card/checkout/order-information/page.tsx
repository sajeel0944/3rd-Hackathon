import { client } from "@/sanity/lib/client";
import Link from "next/link";

// is ky zaraye jab bhi sanity main bata update ya new data dy ragy to to is ky zaraye wo UI main ek second ky baat nazar aye ga
export const revalidate = 1;

const OrderInformationStroge = async () => {


  //is ky andar customer ki information arahe hai sanity sy  or   jab mein sanity ky anadr bata push kar raha tha to
  // wo api data api ky andar mid  main araha tha is sy "| order(_createdAt asc)" ye hoye ga ky jo data mein do ga wo
  //  end main aye ga "| order(_createdAt asc)"
  const sanityCustomerInfo = await client.fetch(
    `*[_type=="customer"] | order(_createdAt asc)`
  );

  // is ko is liye dia hai taky jo bhi user information dy ga wo sanity ky array main jaye gi last main is liye jo bhi array ky last main objech hoye ga wo is main aye ga
  const userInformation = sanityCustomerInfo[sanityCustomerInfo.length - 1];
  // console.log(userInformation)


  
  const url = await fetch("https://3rd-hackathon.vercel.app/api/addToCard", {
    cache: "no-store",
  });

  const convert = await url.json();

  // is ko is liye dia q ky backend ky andar mein ny array ky andar array hai or us ky andar 0 index ky andar sary product aye gy
  const arrayOne = convert[0];
  const findLength = arrayOne.length - 1;
  console.log(findLength);

  // is ko is liye dia hai taky pata chaly ky kitny product buy kiye hai is ki nichy dia hai
  let incre: number = 1;

  // ye is liye dia hai q ky mein ny backend ek default array banaya hai jab  array ki value 2 hogi to first default value delete hogaye gi shift ki madad sy shift array ki frist value ko delete karta hai
  if (arrayOne.length >= 1) {
    arrayOne.shift();
  }

  // Calculate the total price by summing up all product prices or array ky andar jitny bhi product hai un sab ki price ko plus kar raha hai
  const totalPrice = arrayOne.reduce(
    (acc: number, product: any, index: number) =>
      acc + product.price * (convert[1][index] || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Order Information
        </h1>

        {/* Billing Details */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 py-5">Billing Details</h2>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {userInformation.firstName}{" "}
              {userInformation.lastName}
            </p>
            <p>
              <strong>Company:</strong> {userInformation.Company}
            </p>
            <p>
              <strong>Address:</strong> {userInformation.address},{" "}
              {userInformation.City}, {userInformation.Province},{" "}
              {userInformation.ZIP}, {userInformation.Country}
            </p>
            <p>
              <strong>Phone:</strong> {userInformation.Phone}
            </p>
            <p>
              <strong>Email:</strong> {userInformation.Email}
            </p>
            <p>
              <strong>Additional Info:</strong> {userInformation.Additional}
            </p>
          </div>
        </div>

        {/* Product Details */}

        <div className="mb-6">
          <h2 className="text-3xl font-bold  py-5">Product Details</h2>
          {arrayOne.map((manageDateil: any, index: number) => {
            return (
              <>
                <div className="space-y-4">
                  {/* Sample product details */}
                  <div className="flex justify-between items-center border-b pb-2">
                    {/*incre++ jitny bhi product aye gy 1 2 3 ni taha line sy aye gy  */}
                    <p className="text-gray-700">Product {incre++}</p>
                    <p className="text-gray-700">
                      {" "}
                      {/* ek main product ki quality aye gi or dosary main product ki prices aye gi */}
                      {convert[1][index]} x $ {manageDateil.price}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* Total Amount */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Total Amount</h2>
          {/* is ky andar jitny bhi product hai un ki total price aye gi */}
          <p className="text-gray-700">${totalPrice}</p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href={"/home"}>
            <button className="w-full sm:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Continue Shopping
            </button>
          </Link>
          {/* <button className="w-full sm:w-auto bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700">
            Track Order
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default OrderInformationStroge;
