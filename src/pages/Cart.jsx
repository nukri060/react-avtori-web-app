import CartComponent from "../components/CartComponent";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router";

export default function CartPage() {
  const { carts, clearCart } = useContext(CartContext);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Your Cart</h1>
        {carts.length > 0 && (
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Clear Cart
          </button>
        )}
      </div>

      <div className="hidden md:flex font-semibold text-gray-700 border-b pb-2 mb-4">
        <div className="flex-1 text-center">Product</div>
        <div className="w-32 text-center">Price</div>
        <div className="w-40 text-center">Quantity</div>
        <div className="w-32 text-center">Total</div>
      </div>

      <div className="flex flex-col gap-4">
        {carts.length === 0 ? (
          <>
            <p className="text-center text-gray-500">Your cart is empty.</p>
            <Link to="/shop" className="p-2 border-2 border-blue-500 rounded">Go to the shop!</Link>
          </>
        ) : (
          carts.map((item) => (
            <CartComponent
              key={item.name}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
            />
          ))
        )}
      </div>

      {carts.length > 0 && (
        <div className="flex justify-end items-center mt-6 pt-4 border-t border-gray-200">
          <div className="text-xl font-semibold text-gray-800">
            Total: ${(carts.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)).toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
