import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-50 py-3 border-b border-gray-200">
        <div className="container mx-auto flex justify-center">
          <Link
            to={"/"}
            className="text-2xl font-bold text-gray-800 hover:text-amber-400 transition"
          >
            Recipes
          </Link>
        </div>
      </nav>
    </div>
  );
}
