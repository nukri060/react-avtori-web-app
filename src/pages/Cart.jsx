import CartComponent from "../components/CartComponent"

export default function CartPage() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="hidden md:flex font-semibold text-gray-700 border-b pb-2 mb-4">
        <div className="flex-1 text-center">Product</div>
        <div className="w-32 text-center">Price</div>
        <div className="w-40 text-center">Quantity</div>
        <div className="w-32 text-center">Total</div>
      </div>

      <div className="flex flex-col gap-4">
        <CartComponent />
        <CartComponent />
        <CartComponent />
        <CartComponent />
      </div>
    </div>
  )
}
