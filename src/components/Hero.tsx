import Link from "next/link";

type made={
    put:string
}

function Hero(props:made) {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-64 sm:h-80 md:h-96"
        style={{ backgroundImage: `url('/picture/Rectangle 1.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black">
            {props.put}
          </h1>
          <p className="text-sm md:text-base font-medium text-black">
            <span className="hover:underline cursor-pointer ">
              {" "}
              <Link href={"/home"}>Home</Link>
            </span>{" "}
            &gt; {props.put}
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero