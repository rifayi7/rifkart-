import { Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import {
  addToCart,
  ItemRemove,
  quantityReduceCart,
  type cartType,
} from "../redux/slice/cartSlice";
import { useEffect, useState } from "react";

export default function Cart() {
  const { items } = useSelector((state: RootState) => state.cart);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [itemtoremove, setItemtoremove] = useState<cartType | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleCartReduction = (product: cartType) => {
    dispatch(quantityReduceCart(product));
  };
  const handleCartIncrease = (product: cartType) => {
    dispatch(addToCart(product));
  };
  const handleConfirmation = (product: cartType) => {
    setConfirmation(true);
    setItemtoremove(product);
  };

  const deleteItem = () => {
    if (itemtoremove !== null) {
      dispatch(ItemRemove(itemtoremove));
      setItemtoremove(null);
      setConfirmation(false);
    }
  };

  const cancelDeletion = () => {
    setItemtoremove(null);
    setConfirmation(false);
  };

  const cartPriceTotal = items.reduce((acc, cur) => {
    const total = acc + cur.price * cur.quantity;
    return total;
  }, 0);

  useEffect(() => {}, [items]);

  return (
    <div className="relative min-h-screen z-5">
      {confirmation && (
        <>
          <div className="fixed inset-0 z-10 backdrop-blur-[2px] bg-gray-400/10" />
          <div className="flex flex-col justify-between p-10 absolute inset-0 w-[50%] mx-auto my-auto h-[300px] rounded-[10px] bg-white border-4 border-neutral-300 z-[11]">
            <h1 className="text-2xl mt-7">Are you sure to delete the item?</h1>
            <div className="flex justify-end gap-5">
              <button
                className="p-2 bg-green-300 rounded"
                onClick={() => deleteItem()}
              >
                Confirm
              </button>
              <button
                className="p-2 bg-red-400 rounded "
                onClick={() => cancelDeletion()}
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}

      <h1 className="font-bold text-4xl mb-6">Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Left - Table Section */}
        <div className="overflow-x-auto w-full lg:w-[65%]">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-sm text-gray-700 uppercase border-b-2 border-[#e6eaec]">
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 &&
                items.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-dashed border-[#e6eaec]"
                  >
                    <td className="p-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt="product"
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div>
                        <span className="font-medium block">{item.name}</span>
                        <span className="text-ticky-gray text-sm block">
                          {item.price}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">${item.price * item.quantity}</td>
                    <td className="p-4">
                      <div className="flex items-center border rounded-[10px] w-20 overflow-clip">
                        <input
                          readOnly
                          type="number"
                          value={item.quantity}
                          min={1}
                          className="w-full outline-none text-center appearance-none"
                        />
                        <div className="flex flex-col">
                          <button onClick={() => handleCartIncrease(item)}>
                            <ChevronUp
                              size={20}
                              className="text-white hover:text-black bg-tiddy-black"
                              // onClick={() => handleCartIncrease(item)}
                            />
                          </button>
                          <button
                            onClick={() => handleCartReduction(item)}
                            disabled={item.quantity === 1}
                          >
                            <ChevronDown
                              size={20}
                              className="text-white hover:text-black bg-tiddy-black"
                            />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">${item.price * item.quantity}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleConfirmation(item)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Right - Cart Totals Section */}
        <div className="w-full lg:w-[35%] sticky top-0 self-start">
          <div className="border-[#e6eaec] border p-6 rounded-md w-full">
            <h2 className="text-lg font-semibold mb-4">Cart totals</h2>

            <div className="flex justify-between text-gray-700 mb-2">
              <span className="font-semibold">Subtotal</span>
              <span>$120.00</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between text-gray-800 font-bold text-lg mb-4">
              <span>Total</span>
              <span>${cartPriceTotal}</span>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              {cartPriceTotal >= 5000 ? (
                <span>Free delivery 🎉</span>
              ) : (
                <>
                  Add{" "}
                  <span className="font-medium">${5000 - cartPriceTotal}</span>{" "}
                  more to get free shipping!
                </>
              )}
            </p>

            <div className="w-full h-2 bg-gray-200 rounded overflow-hidden mb-6">
              <div
                className={`h-full ${
                  cartPriceTotal >= 5000 ? "bg-green-500" : "bg-yellow-400"
                }`}
                style={{
                  width:
                    cartPriceTotal >= 5000
                      ? "100%"
                      : `${Math.min((cartPriceTotal / 5000) * 100, 100)}%`,
                }}
              ></div>
            </div>

            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
