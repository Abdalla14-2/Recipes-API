import { Link } from "react-router-dom";

export default function Card({ id, title, image, description }) {
  return (
    <div className="rounded-3xl bg-stone-100 overflow-hidden transform transition duration-300 hover:scale-105 group shadow-md hover:shadow-xl">
      <Link to={`/details/${id}`}>
        <img className="w-full rounded-t-3xl" src={image} alt={title} />
        <div className="card-footer py-2 px-7">
          <h2 className="capitalize font-semibold text-gray-900 line-clamp-1 text-lg group-hover:text-amber-600 transition duration-300">
            {title}
          </h2>
          <h4 className="text-gray-700 line-clamp-3 group-hover:text-amber-400 transition duration-300">
            {description}
          </h4>
        </div>
      </Link>
    </div>
  );
}
