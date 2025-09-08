import React from "react";

export default function CartComponent({
  name = "Product Name",
  price = 29.99,
  image = "https://via.placeholder.com/150",
  quantity = 1,
}) {
  return (
    <div className="flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <img
          className="w-16 h-16 object-cover rounded-md border"
          src={image}
          alt={name}
        />
        <h2 className="font-medium text-gray-800 truncate">{name}</h2>
      </div>

      <div className="w-24 text-center text-blue-600 font-semibold">
        ${price.toFixed(2)}
      </div>

      <div className="w-36 flex items-center justify-center gap-2">
        <button className="px-3 py-1 bg-gray-200 rounded-full text-gray-700">
          -
        </button>
        <span className="text-gray-800 font-medium">{quantity}</span>
        <button className="px-3 py-1 bg-blue-600 rounded-full text-white">
          +
        </button>
      </div>

      <div className="w-28 text-center text-gray-700 font-medium">
        ${(price * quantity).toFixed(2)}
      </div>
    </div>
  );
}