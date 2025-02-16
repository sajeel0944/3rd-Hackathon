
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
