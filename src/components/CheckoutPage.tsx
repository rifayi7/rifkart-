import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import CartTotalPrice from "./utils/CartTotalPrice";

export default function CheckoutPage() {
  const { items: addreslList } = useSelector(
    (state: RootState) => state.address
  );
  const { items: cartList } = useSelector((state: RootState) => state.cart);
  const cartTotalPrice = CartTotalPrice(cartList);

  console.log(cartTotalPrice);
  return (
    <div className="">
      <h1 className="font-bold text-4xl mb-6">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-[65%] space-y-6">
          {/* Address Preview */}
          <div className="border border-[#e6eaec] p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            {addreslList.map((address) => {
              return (
                <div
                  key={address.id}
                  className="text-gray-700 space-y-1 leading-6"
                >
                  <p className="font-medium">
                    {address.fname} {address.lname}
                  </p>
                  <p>{address.addressline}</p>
                  <p>{address.city}</p>
                  <p>Phone: +91 {address.phone}</p>
                  <p>Email: {address.email}</p>
                </div>
              );
            })}
          </div>

          {/* Cart Preview */}
          <div className="border border-[#e6eaec] p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Order Items</h2>
            <div className="space-y-4">
              {/* Item 1 */}
              {cartList.map((item) => {
                return (
                  <div key={item.id} className="flex items-center gap-4 ">
                    <img
                      src={item.image}
                      alt="Teddy"
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between font-medium">
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Payment Section */}
          <div className="border border-[#e6eaec] p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <form className="space-y-4">
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="payment" className="accent-black" />
                  <span>Credit / Debit Card</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="payment" className="accent-black" />
                  <span>UPI / Net Banking</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="payment" className="accent-black" />
                  <span>Cash on Delivery (COD)</span>
                </label>
              </div>

              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg mt-2">
                Confirm and Pay
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT - Order Summary */}
        <div className="w-full lg:w-[35%] sticky top-0 self-start">
          <div className="border-[#e6eaec] border p-6 rounded-md w-full">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>${cartTotalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span>${cartTotalPrice >= 5000 ? 0 : 10.0}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax</span>
                <span>$5.00</span>
              </div>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between text-gray-900 font-bold text-lg mb-4">
              <span>Total</span>
              <span>${cartTotalPrice + 5}.00</span>
            </div>

            <p className="text-sm text-gray-500">
              You're one step away from completing your purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
