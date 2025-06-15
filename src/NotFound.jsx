import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-5xl font-bold text-amber-500 mb-6">
        404 - Not Found
      </h1>
      <Link to="/">
        <button className="bg-amber-500 text-white px-6 py-2 rounded-xl hover:bg-amber-600 transition duration-300">
          Back Home
        </button>
      </Link>
    </div>
  );
}
