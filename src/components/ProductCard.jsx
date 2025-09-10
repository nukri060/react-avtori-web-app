import { Link } from "react-router-dom";

export default function ProductCard({ id, image, name, price, desc }) {
  return (
    <Link
      to={`/det/${id}`}
      className="max-w-xs w-full bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 block"
    >
      <img
        src={image || "https://picsum.photos/300/200"}
        alt={name || "Product"}
        className="w-full h-60 object-cover rounded-t-xl"
      />

      <div className="px-4 py-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {name || "Product Name"}
        </h3>

        <p className="text-lg font-bold text-gray-900 mt-1">
          {price || "$0.00"}
        </p>

        {desc && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{desc}</p>
        )}
      </div>
    </Link>
  );
}
