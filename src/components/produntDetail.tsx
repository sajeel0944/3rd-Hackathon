"use client";

//  is ko props ki type ky liye banaya hai
type detail = {
  id?: number;
  name?: string;
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  price?: number;
  discribtion?: string;
  Sku?: string;
  Category?: string;
};

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ShowAddToCardNotification from "./showAddToCardNotification";

function ProduntDetail(props: detail) {
  // is ko nichy discribtion maim dia hai q ky sanity sy discrition bohot bare arahe thi is function sy hamain jitny word dyna hai hum utny word dy sak ty hai
  function getWords(input: any, wordLimit: number): string {
    const words = input.split(" "); // Split string into words
    return words.slice(0, wordLimit).join(" "); // Join only the first `wordLimit` words
  }

  // is ky zaye producr ki quality manage karrahy hai
  let [incre, setincre] = useState<number>(1);

  let plus = () => {
    setincre(incre + 1);
  };

  let minus = () => {
    setincre(incre - 1);
  };

  let [cha, setcha] = useState<any>(props.image);
  // console.log(cha)

  // is ko nichy add to cart buttom onClick main diya hai is ky zaye api/addToCard main data jaraha hai
  const pushDataSanity = async () => {
    const url = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/addToCard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        arratIdNumber: props.id,
        quality: incre,
      }),
    });
  };

  // start     is nichy addtocard waly buttom main diya hai ye is liye diya taky jab user addtocard par click karry to  ShowAddToCardNotification wala componenet show ho
  let [displatNotification, setdisplatNotification] = useState(false);
  const handle = () => {
    //is main sound hai
    const sound = new Audio("/sound/notification-2-269292.mp3");
    sound.play();

    // jab user  addtocard wala buttum ko click karry ga to displatNotification is value true hogaye gi
    setdisplatNotification((displatNotification = true));

    // q ky ShowAddToCardNotification notification hai is liye bas setdisplatNotification 3 sec tak rahy us ky baat wo phir sy false ho jaye
    setTimeout(() => {
      setdisplatNotification((displatNotification = false));
    }, 3000);

    // end   ShowAddToCardNotification componenet ko addtocard ky buttom ky nichy dia hai
  };

  return (
    <>
      {/* ye top nab hai */}
      <div className="h-[100px] w-full flex items-center bg-[#F9F1E7] [@media(max-width:768px)]:h-[70px] ">
        <div className="h-6 w-[34%] border- flex justify-between items-center ml-[99px] [@media(max-width:1124px)]:w-[36%] [@media(max-width:1124px)]:ml-[35px] [@media(max-width:768px)]:w-[80%] ">
          <div className="h-6 w-[21%] border- flex justify-between items-center ">
            <h3 className="text-[#9F9F9F] font-normal text-base cursor-pointer">
              Home
            </h3>
            <Image
              src={"/picture/dashicons_arrow-up-alt2.png"}
              alt={"arrow"}
              height={17}
              width={17}
            />
          </div>
          <div className="h-6 w-[21%] border- flex justify-between items-center ">
            <h3 className="text-[#9F9F9F] font-normal text-base cursor-pointer">
              Show
            </h3>
            <Image
              src={"/picture/dashicons_arrow-up-alt2.png"}
              alt={"arrow"}
              height={17}
              width={17}
            />
          </div>

          <div className="h-8 w-[39%]  flex justify-end items-center border-l-2 border-[#9F9F9F] [@media(max-width:1124px)]:w-[40%] ">
            <h3 className=" font-normal text-base cursor-pointer ">
              {/* Asgaard sofa */}
              {props.name}
            </h3>
          </div>
        </div>
      </div>

      {/* ye iamge selection hai jo chenge hoga */}

      <div className=" w-full h-[780px] px-24 pt-9  [@media(max-width:1124px)]:px-8 [@media(max-width:768px)]:h-[1330px] [@media(max-width:550px)]:px-2">
        <div className=" w-full h-[770px] flex justify-between  [@media(max-width:768px)]:flex-col [@media(max-width:768px)]:h-[1250px] ">
          <div className=" w-[46%] h-[490px] flex justify-between  [@media(max-width:1124px)]:w-[48%] [@media(max-width:768px)]:w-full [@media(max-width:550px)]:flex-col">
            <div className=" w-[22%] h-[392px] space-y-6 [@media(max-width:550px)]:flex [@media(max-width:550px)]:w-full [@media(max-width:550px)]:space-y-0 [@media(max-width:550px)]:space-x-2 [@media(max-width:550px)]:h-[150px]">
              {/* is main usestate ky zayeya image ko change kar raha hai  */}
              <div
                className="w-full h-[79px]  rounded bg-[#F9F1E7] "
                onClick={() => {
                  setcha((cha = props.image1));
                }}
              >
                <Image
                  src={`${props.image1}`}
                  alt={`${props.name}`}
                  width={80}
                  height={50}
                  className="w-full h-full rounded-lg cursor-pointer"
                />
              </div>
              {/* is main usestate ky zayeya image ko change kar raha hai  */}
              <div
                className="w-full h-[79px]  rounded bg-[#F9F1E7]"
                onClick={() => {
                  setcha((cha = props.image2));
                }}
              >
                <Image
                  src={`${props.image2}`}
                  alt={`${props.name}`}
                  width={80}
                  height={50}
                  className="w-full h-full rounded-lg cursor-pointer"
                />
              </div>
              {/* is main usestate ky zayeya image ko change kar raha hai  */}
              <div
                className="w-full h-[79px]  rounded bg-[#F9F1E7]"
                onClick={() => {
                  setcha((cha = props.image3));
                }}
              >
                <Image
                  src={`${props.image3}`}
                  alt={`${props.name}`}
                  width={80}
                  height={50}
                  className="w-full h-full rounded-lg cursor-pointer"
                />
              </div>
              {/* is main usestate ky zayeya image ko change kar raha hai  */}
              <div
                className="w-full h-[79px]  rounded bg-[#F9F1E7]"
                onClick={() => {
                  setcha((cha = props.image4));
                }}
              >
                <Image
                  src={`${props.image4}`}
                  alt={`${props.name}`}
                  width={80}
                  height={50}
                  className="w-full h-full rounded-lg cursor-pointer"
                />
              </div>
            </div>
            <div className=" w-[70%] h-[488px] bg-[#F9F1E7] rounded-lg [@media(max-width:550px)]:w-full  [@media(max-width:550px)]:h-[390px]">
              <Image
                // is main usestate ky zayeya image a rahe hai
                src={cha}
                alt={`${props.name}`}
                width={900}
                height={960}
                className="h-full rounded-lg"
              />
            </div>
          </div>

          <div className=" w-[46%] h-[710px]  [@media(max-width:1124px)]:w-[49%] [@media(max-width:768px)]:w-full ">
            <h3 className="font-normal text-[42px]">{props.name}</h3>
            <h4 className="font-medium text-2xl text-[#9F9F9F]">
              $. {props.price}.00
            </h4>
            <div className=" w-[51%] h-10 flex justify-between [@media(max-width:1124px)]:w-[79%] ">
              <div className="w-[45%] h-10 flex items-center ">
                <Image
                  src={"/picture/dashicons_star-filled.png"}
                  alt={"star"}
                  width={25}
                  height={25}
                />
                <Image
                  src={"/picture/dashicons_star-filled.png"}
                  alt={"star"}
                  width={25}
                  height={25}
                />
                <Image
                  src={"/picture/dashicons_star-filled.png"}
                  alt={"star"}
                  width={25}
                  height={25}
                />
                <Image
                  src={"/picture/dashicons_star-filled.png"}
                  alt={"star"}
                  width={25}
                  height={25}
                />
                <Image
                  src={"/picture/carbon_star-half.png"}
                  alt={"star"}
                  width={25}
                  height={25}
                />
              </div>
              <div className="border-l-2 border-[#9F9F9F] h-10 flex items-center justify-end w-[50%]">
                <h4 className="text-[#9F9F9F] text-sm ">5 Customer Review</h4>
              </div>
            </div>
            <div className=" w-[80%] h-[80px] mt-4  [@media(max-width:1124px)]:w-[93%]">
              {/* getword ko upper banaya hai  */}
              <h1 className="text-sm">{getWords(props.discribtion, 30)}</h1>
            </div>
            <div className=" w-[30%] h-16 mt-5  [@media(max-width:1124px)]:w-[45%]  [@media(max-width:1124px)]:mt-7">
              <h3 className="text-[#9F9F9F]">Size</h3>
              <div className=" w-full h-[30px] flex justify-between mt-1">
                <div className=" h-[30px] w-[25%] rounded-md bg-[#F9F1E7] hover:bg-[#B88E2F] cursor-pointer flex items-center justify-center hover:text-white">
                  <h3>L</h3>
                </div>
                <div className=" h-[30px] w-[25%] rounded-md bg-[#F9F1E7] hover:bg-[#B88E2F] cursor-pointer flex items-center justify-center hover:text-white">
                  <h3>XL</h3>
                </div>
                <div className=" h-[30px] w-[25%] rounded-md bg-[#F9F1E7] hover:bg-[#B88E2F] cursor-pointer flex items-center justify-center hover:text-white">
                  <h3>XS</h3>
                </div>
              </div>
            </div>

            <div className=" w-[30%] h-16 mt-5  [@media(max-width:1124px)]:w-[45%]">
              <h3 className="text-[#9F9F9F]">Color</h3>
              <div className=" w-full h-[30px] flex justify-between mt-1 ">
                <div className=" h-[30px] w-[22%] rounded-full bg-[#816DFA] hover:h-[32px] hover:w-[23%] cursor-pointer flex items-center justify-center hover:text-white "></div>
                <div className=" h-[30px] w-[22%] rounded-full bg-[#000000] hover:h-[32px] hover:w-[23%] cursor-pointer flex items-center justify-center hover:text-white"></div>
                <div className=" h-[30px] w-[22%] rounded-full bg-[#B88E2F] hover:h-[32px] hover:w-[23%] cursor-pointer flex items-center justify-center hover:text-white"></div>
              </div>
            </div>

            <div className=" w-full h-16 flex justify-between mt-5 [@media(max-width:550px)]:items-center">
              <div className="border border-black w-[23%] h-16 rounded-lg flex justify-around items-center [@media(max-width:550px)]:h-12 [@media(max-width:550px)]:rounded-xl">
                <span className="text-base cursor-pointer" onClick={minus}>
                  -
                </span>
                <span className="text-base">{incre}</span>
                <span className="text-base cursor-pointer" onClick={plus}>
                  +
                </span>
              </div>

              <div className="border border-black cursor-pointer w-[35%] h-16 rounded-2xl flex justify-center items-center [@media(max-width:550px)]:h-12">
                {/* pushDataSanity ye function upper dia hai */}
                <h3
                  className="text-xl c  [@media(max-width:1124px)]:text-lg"
                  onClick={() => {
                    pushDataSanity();
                    handle();
                  }}
                >
                  Add To Cart
                </h3>
              </div>
              {/*start  ShowAddToCardNotification component hai jab  Add To Cart waly buttum par click hoye ga to ye dis play hoye*/}
              {displatNotification ? <ShowAddToCardNotification /> : ""}
              {/* end  */}

              <div className="border border-black w-[35%] h-16 rounded-2xl flex justify-center items-center [@media(max-width:550px)]:h-12">
                <div className="flex items-center justify-between w-[90%] ">
                  <span className="text-2xl  [@media(max-width:1124px)]:text-xl  [@media(max-width:1124px)]:mr-3 ">
                    +
                  </span>
                  <h3 className="text-xl  [@media(max-width:1124px)]:text-lg ">
                    Compare
                  </h3>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#9F9F9F] w-full h-44 mt-11 text-[#9F9F9F] pt-9 space-y-3">
              <div className="w-full flex">
                <h3 className="w-[21%]">Sku</h3>{" "}
                <span className="w-[3%]">:</span> <h3>{props.Sku}</h3>
              </div>
              <div className="w-full flex">
                <h3 className="w-[21%]">Category</h3>{" "}
                {/* join is liye laga ya hai ky array ky nadar jitni bhi value hai un main , comma aye ga  */}
                <span className="w-[3%]">:</span> <h3>{[props.Category].join(" , ")}</h3>
              </div>
              <div className="w-full flex">
                <h3 className="w-[21%]">Tags</h3>{" "}
                <span className="w-[3%]">:</span>{" "}
                <h3>Sofa, Chair, Home, Shop</h3>
              </div>
              <div className="w-full flex">
                <h3 className="w-[21%]">Share</h3>{" "}
                <span className="w-[3%]">:</span>{" "}
                <div className="flex justify-between w-[20%]  [@media(max-width:1124px)]:w-[30%]">
                  <Link
                    href={
                      "https://www.facebook.com/people/Sajeel-Khan/pfbid02MqZHPA1iHRTCJMAmZX62R4fWMdSRhGbdb7A17PDPntiGbU1FoYeNfqMoGsRogpGFl/"
                    }
                    target="_blank"
                  >
                    <Image
                      src={"/picture/akar-icons_facebook-fill.png"}
                      alt={"facebook"}
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/sajeel-ullah-khan-b2b7502bb/"
                    }
                    target="_blank"
                  >
                    <Image
                      src={"/picture/akar-icons_linkedin-box-fill.png"}
                      alt={"facebook"}
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                  </Link>
                  <Link href={""} target="_blank">
                    <Image
                      src={"/picture/ant-design_twitter-circle-filled.png"}
                      alt={"twitter"}
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* discribtion ka selection hai last wala*/}

      <div className="w-full lg:[604px] px-24  [@media(max-width:1124px)]:px-8 [@media(max-width:639px)]:px-1 md:h-[720px] sm:h-[1130px] [@media(max-width:639px)]:h-[1250px]">
        <div className=" w-full h-[595px] space-y-12 mt-7 md:h-[660px] sm:h-[1058px] [@media(max-width:460px)]: [@media(max-width:639px)]:h-[1190px] [@media(max-width:639px)]:space-y-9">
          <div className="w-full h-9 flex items-center justify-center px-1">
            <div className="w-[60%] h-9 flex justify-between  [@media(max-width:1124px)]:w-full [@media(max-width:639px)]:items-center">
              <h2 className="font-medium md:text-2xl sm:text-xl [@media(max-width:460px)]:text-sm">
                Description
              </h2>
              <h2 className="md:text-2xl text-[#9F9F9F] sm:text-xl [@media(max-width:460px)]:text-sm">
                Additional Information
              </h2>
              <h2 className="md:text-2xl text-[#9F9F9F] sm:text-xl [@media(max-width:460px)]:text-sm">
                Reviews [5]
              </h2>
            </div>
          </div>

          <div className="w-full h-[174px] space-y-7  md:h-[260px] sm:h-[330px] [@media(max-width:639px)]:h-[520px] px-1">
            <p className="text-justify text-[#9F9F9F]">
              {/* getword ko upper banaya hai  */}
              {getWords(props.discribtion, 160)}
            </p>
          </div>

          <div className="w-full h-[282px] flex space-x-8 [@media(max-width:768px)]:flex-col [@media(max-width:768px)]:h-[590px] [@media(max-width:768px)]:space-x-0 [@media(max-width:768px)]:space-y-6">
            <div className="w-[50%] h-[281px] bg-[#F9F1E7] [@media(max-width:768px)]:w-full flex justify-center">
              <Image
                src={"/picture/Group 106.png"}
                alt={""}
                width={500}
                height={100}
              />
            </div>

            <div className="w-[50%] h-[281px] bg-[#F9F1E7] [@media(max-width:768px)]:w-full flex justify-center">
              <Image
                src={"/picture/Group 107.png"}
                alt={""}
                width={500}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProduntDetail;
