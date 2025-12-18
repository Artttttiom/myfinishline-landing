import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="h-[calc(100vh-300px)] bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex items-center text-2xl font-bold text-green-600 mb-4">
          Payment Successful!
        </div>
        <p className="text-gray-600 mb-4">Thank you for your purchase.</p>
        <Link
          href="/signup"
          className="inline-block w-full bg-black text-white py-2 px-4 rounded-md"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
