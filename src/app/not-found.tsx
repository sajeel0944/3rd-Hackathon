// import Link from "next/link"

// function NotFound(){
//     return(
//         <>
//         <div className="w-full h-[500px] flex justify-center items-center">
//             <div>
//                 <h1 className="text-2xl">Working On this Page </h1>
//                 <h1 className="text-2xl w-full text-center h-12 my-2">404</h1>
//                 <button className="bg-gray-400 rounded-md text-2xl h-12 w-[100%]"><Link href={"/home"}> Go To Home Page</Link></button>
//             </div>

//         </div>
//         </>
//     )
// }

// export default NotFound


// pages/404.tsx
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-center text-gray-600 mb-6">
      Work is in progress on this page.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-300"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
