import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionLast from "@/components/SectionLast";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  const posts = [
    {
      id: 1,
      image: "/picture/Rectangle 68.png",
      category: "Wood",
      date: "14 Oct 2022",
      title: "Lorem ipsum dolor sit amet",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      id: 2,
      image: "/picture/Rectangle 68 (1).png",
      category: "Handmade",
      date: "14 Oct 2022",
      title: "Lorem ipsum dolor sit amet",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      id: 3,
      image: "/picture/Rectangle 68 (2).png",
      category: "Wood",
      date: "14 Oct 2022",
      title: "Lorem ipsum dolor sit amet",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const posts2 = [
    {
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      image: "/images/design.jpg",
    },
    {
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
      image: "/images/decorating.jpg",
    },
    {
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
      image: "/images/handmade.jpg",
    },
    {
      title: "Modern home in Milan",
      date: "03 Aug 2022",
      image: "/images/milan.jpg",
    },
    {
      title: "Colorful office redesign",
      date: "03 Aug 2022",
      image: "/images/office.jpg",
    },
  ];

  return (
    <>
      <Header />

      {/* ye hero section hai */}
      <Hero put="Blog" />

      <div className="bg-gray-100 py-8 ">
        <div className="container mx-auto px-4 flex justify-between [@media(max-width:640px)]:flex-col [@media(max-width:630px)]:h-[2600px]">
          <div className="grid grid-cols-1  gap-12 w-[50%] h-[1500px] [@media(max-width:630px)]:h-[1700px] [@media(max-width:640px)]:w-full ">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                {/* Image Section */}
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={100}
                  className="w-full h-64 object-cover"
                />

                {/* Post Details */}
                <div className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="mr-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12h18m-9-9v18"
                        />
                      </svg>
                      {post.author}
                    </span>
                    <span className="mr-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16l-4-4m0 0l4-4m-4 4h16"
                        />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 8a6 6 0 00-12 0v3a4 4 0 004 4h4a4 4 0 004-4V8z"
                        />
                      </svg>
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </div>
            ))}

            <div className="mt-6 text-end space-x-6">
              <button className="bg-[#FAF3EA] hover:text-white px-4 py-2 rounded hover:bg-yellow-600">
                1
              </button>
              <button className="bg-[#FAF3EA] hover:text-white px-4 py-2 rounded hover:bg-yellow-600">
                2
              </button>
              <button className="bg-[#FAF3EA]  hover:text-white  px-4 py-2 rounded hover:bg-yellow-600">
                3
              </button>
              <button className="bg-[#FAF3EA]  hover:text-white px-4 py-2 rounded hover:bg-yellow-600">
                Next
              </button>
            </div>
          </div>

          <div className="lg:w-[30%] sm:w-[40%] ">
            <div className="bg-white p-6 shadow-md rounded-lg  sm:h-[537px] ">
              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="absolute right-3 top-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.547 3.082l4.338 4.339a1 1 0 11-1.414 1.414l-4.339-4.338A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Categories Section */}
              <div className="">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Categories
                </h2>
                <ul className="space-y-2 ">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center text-gray-600 text-sm py-6 "
                    >
                      <span>{category.name}</span>
                      <span className="text-gray-500">{category.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className=" mx-auto p-4 [@media(max-width:630px)]:w-full [@media(max-width:630px)]:mt-5">
              <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
              <ul className="space-y-6">
                {posts.map((posts2, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <Image
                      src={posts2.image}
                      alt={posts2.title}
                      width={100}
                      height={100}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{posts2.title}</h3>
                      <p className="text-sm text-gray-500">{posts2.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SectionLast />

      <Footer />
    </>
  );
}

export default Blog;
