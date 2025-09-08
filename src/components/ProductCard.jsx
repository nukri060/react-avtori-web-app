import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ image, name, price, desc }) {
  const { addToCart } = useContext(CartContext);

  function addItem() {
    addToCart({
      name,
      price: Number(price.replace(/[^0-9.]/g, '')),
      image,
      quantity: 1, 
    });
  }

  return (
    <div className="max-w-xs w-full bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300">
      <img
        src={image || "https://picsum.photos/300/200"}
        alt={name || "Product"}
        className="w-full h-86 object-cover rounded-t-xl"
      />

      <div className="px-4 py-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {name || "Product Name"}
        </h3>

        <p className="text-lg font-bold text-gray-900 mt-1">
          ${price || "0.00"}
        </p>

        {desc && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{desc}</p>
        )}

        <button
          onClick={addItem}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
