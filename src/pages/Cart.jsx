import CartComponent from "../components/CartComponent";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

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
          <p className="text-center text-gray-500">Your cart is empty.</p>
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
    </div>
  );
}
