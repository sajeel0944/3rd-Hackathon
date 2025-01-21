"use client";

import Image from "next/image";
import { useState } from "react";

function HomeScrollImageSection() {
  // ye slider ky liye hai

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  interface Slide {
    id: number;
    title: string;
    subtitle: string;
    img: string;
  }

  // Sample images for the slider
  const slides: Slide[] = [
    {
      id: 1,
      title: "Inner Peace",
      subtitle: "01 — Bed Room",
      img: "/picture/Rectangle 24.png",
    },
    {
      id: 2,
      title: "Browse The Range",
      subtitle: "02 — Potty",
      img: "/picture/image 8.png",
    },
    {
      id: 3,
      title: "Muggo",
      subtitle: "03 — Small mug",
      img: "/picture/image 6.png",
    },
    {
      id: 4,
      title: "Outdoor bar table and stool",
      subtitle: "04 — Respira",
      img: "/picture/image 4.png",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev: number) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev: number) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      {/* slider */}

      <div className="min-h-screen bg-gray-50 flex items-center justify-center md:py-16 [@media(max-width:767px)]:h-[900px] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-800 leading-snug">
                50+ Beautiful rooms inspiration
              </h1>
              <p className="text-gray-600 text-lg">
                Our designer already made a lot of beautiful prototypes of rooms
                that inspire you.
              </p>
              <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
                Explore More
              </button>
            </div>

            {/* Image Carousel Section */}
            <div className="relative">
              {/* Slide */}
              <div className="relative">
                <Image
                  src={slides[currentSlide].img}
                  alt={slides[currentSlide].title}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg [@media(max-width:767px)]:h-[490px] "
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
                  <p className="text-sm text-gray-500">
                    {slides[currentSlide].subtitle}
                  </p>
                  <h2 className="text-xl font-bold text-gray-800">
                    {slides[currentSlide].title}
                  </h2>
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                >
                  <Image
                    src={"/picture/Right 24px.png"}
                    alt={"arrow"}
                    width={80}
                    height={30}
                    className="rotate-180"
                  />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <button
                  onClick={handleNext}
                  className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                >
                  <Image
                    src={"/picture/Right 24px.png"}
                    alt={"arrow"}
                    width={80}
                    height={30}
                    className=""
                  />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {slides.map((slide, index) => (
                  <span
                    key={slide.id}
                    className={`w-3 h-3 cursor-pointer rounded-full ${
                      currentSlide === index ? "bg-yellow-600" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScrollImageSection;
