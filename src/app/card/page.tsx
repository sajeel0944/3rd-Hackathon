import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionLast from "@/components/SectionLast";
import DeleteAddCardProduct from "@/components/deleteAddCardProduct";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

async function Card() {
  const url = await fetch("https://3rd-hackathon.vercel.app/api/addToCard", {
    cache: "no-store",
  });
  
  const convert = await url.json();

  // is ko is liye dia q ky backend ky andar mein ny array ky andar array hai or us ky andar 0 index ky andar sary product aye gy
  const arrayOne = convert[0];

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
    <>
   

      <Header />

      <Hero put="Card" />

      <div className="p-4 space-y-6 flex [@media(max-width:767px)]:flex-col">
        {/* Cart Table */}

        <div className="w-full overflow-x-auto">
          <table className="w-[94%] border-collapse text-sm">
            <thead>
              <tr className="bg-beige-light bg-[#F9F1E7]">
                <th className="text-left p-3 text-gray-700">Product</th>
                <th className="text-left p-3 text-gray-700">Price</th>
                <th className="text-left p-3 text-gray-700">Quantity</th>
                <th className="text-left p-3 text-gray-700">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            {/* ye uppar diya hai ye  user jo bhi product add to card kary ga wo is main ata rahy ga*/}
            {arrayOne.map((manageDateil: any ,index:number) => {
              return (
                <>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3 flex items-center space-x-4 [@media(max-width:535px)]:flex-col [@media(max-width:535px)]:space-y-2 ">
                        <Image
                          src={`${manageDateil.imageUrl}`}
                          alt="Asgaard Sofa"
                          width={80}
                          height={80}
                          className="w-16 h-16 rounded object-cover"
                        />
                        <span className="text-gray-800 text-sm">
                          {manageDateil.title}
                        </span>
                      </td>
                      <td className="p-3 text-gray-700">
                        Rs. {manageDateil.price}
                      </td>
                      <td className="p-3 pl-9">
                    {/*is main quality arahe hai or array ky andar 2 array hai is liye [1] dala hai or us ky andar index diya hai taky jo index ka number us ki value aye       */}
                        {convert[1][index]}
                      </td>
                      <td className="p-3 text-gray-700">
                        {/* jo  product ki price hai us ko product ki quality sy multiple kar arha ho*/}
                        Rs. {manageDateil.price * convert[1][index]}
                      </td>
                      <td className="p-3">
                        {/* is sy ye ho raha hai ky item ko delete karrahy hai un ky index number ky zaaye */}
                        <DeleteAddCardProduct indecNumber={index}/>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>

        {/* Cart Totals */}
        <div className="w-[30%] bg-[#F9F1E7] p-4 rounded shadow-md space-y-10 h-72  [@media(max-width:767px)]:w-full">
          <h2 className="text-lg font-bold">Cart Totals</h2>
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Subtotal</span>
            {/* totalPrice ko upper dia woya hai   */}
            <span className="text-gray-800 text-sm">Rs. {totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-800 font-semibold text-sm">Total</span>
            {/* totalPrice ko upper dia woya hai   */}
            <span className="text-gold font-bold text-sm">Rs. {totalPrice}</span>
          </div>

          <div className="flex justify-center">
            <button className="lg:w-[60%] md:w-full bg-gold py-2 px-4 rounded-xl text-black border-[#9F9F9F] border-2 ">
             <Link href={"/card/checkout"}> 
              Check Out
              </Link>
            </button>
          </div>
        </div>
      </div>

      <SectionLast />

      <Footer />
    </>
  );
}

export default Card;
