import Link from "next/link";

interface IParams {
  searchParams: {
    amount: number;
  };
}

const PaymentSuccess = ({ searchParams }: IParams) => {
  const currentDate = new Date().toLocaleDateString("en-GB");

  const currentTime = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
          <div className="text-green-500 text-6xl mb-4">✔</div>
          <h1 className="text-2xl font-bold text-gray-800">Payment Received</h1>
          <p className="text-gray-600 mt-2">
            Thank you! Your payment has been successfully processed.
          </p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Transaction Details
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg mt-2 text-gray-600">
              <p>
                <strong>Transaction Amount : </strong> $ {searchParams.amount}
              </p>
              <p>
                <strong>Transaction Time : </strong> {currentTime}
              </p>
              <p>
                <strong>Transaction Date : </strong> {currentDate}
              </p>
            </div>
          </div>
        <Link href={"/home"}>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Back to home
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
