import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products"; 
import { Star } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Product not found</h2>
        <Link
          to="/shop"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  function handleAddToCart() {
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price.replace(/[^0-9.]/g, "")),
      image: product.image,
      quantity: 1,
    });
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-2xl shadow-md"
          />
          <div className="flex gap-4 mt-4">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className="w-24 h-24 object-cover rounded-xl border hover:ring-2 hover:ring-blue-500 transition"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800">{product.name}</h1>
            <p className="text-gray-500 mt-1">{product.brand}</p>
          </div>

          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          <div className="text-2xl font-bold text-blue-600">{product.price}</div>

          <p className="text-gray-700">{product.details}</p>

          {product.specs && (
            <ul className="list-disc pl-6 text-gray-600 space-y-1 text-left">
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-4 mt-4">
            <span
              className={`text-sm font-medium ${
                product.stock === "In Stock"
                  ? "text-green-600"
                  : product.stock === "Low Stock"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {product.stock}
            </span>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md"
            >
              Add to Cart
            </button>
            <Link
              to="/shop"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
