import { Trash2, ChevronUp, ChevronDown } from "lucide-react";
import teddy from "../assets/Kid Dresses/Teddy-2.webp";

export default function Cart() {
  return (
    <div className="">
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
              <tr className="border-b border-dashed border-[#e6eaec] ">
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={teddy}
                    alt="Teddy Dress"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <span className="font-medium block">Teddy Dress</span>
                    <span className="text-ticky-gray text-sm block">
                      $20.00
                    </span>
                  </div>
                </td>
                <td className="p-4">$100</td>
                <td className="p-4">
                  <div className="flex items-center border rounded-[10px] w-20 overflow-clip">
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      className="w-full outline-none text-center appearance-none"
                    />
                    <div className="flex flex-col">
                      <button>
                        <ChevronUp
                          size={20}
                          className="text-white hover:text-black bg-tiddy-black"
                        />
                      </button>
                      <button>
                        <ChevronDown
                          size={20}
                          className="text-white hover:text-black bg-tiddy-black"
                        />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="p-4">$100</td>
                <td className="p-4">
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-dashed border-[#e6eaec] ">
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={teddy}
                    alt="Teddy Dress"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <span className="font-medium block">Teddy Dress</span>
                    <span className="text-ticky-gray text-sm block">
                      $20.00
                    </span>
                  </div>
                </td>
                <td className="p-4">$100</td>
                <td className="p-4">
                  <div className="flex items-center border rounded-[10px] w-20 overflow-clip">
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      className="w-full outline-none text-center appearance-none"
                    />
                    <div className="flex flex-col">
                      <button>
                        <ChevronUp
                          size={20}
                          className="text-white hover:text-black bg-tiddy-black"
                        />
                      </button>
                      <button>
                        <ChevronDown
                          size={20}
                          className="text-white hover:text-black bg-tiddy-black"
                        />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="p-4">$100</td>
                <td className="p-4">
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Spacer to allow page scroll for sticky effect */}
          {/* <div className="h-[600px] bg-red-500"></div> */}
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
              <span>$120.00</span>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Add <span className="font-medium">$180.00</span> more to get free
              shipping!
            </p>

            <div className="w-full h-2 bg-gray-200 rounded overflow-hidden mb-6">
              <div
                className="h-full bg-yellow-400"
                style={{ width: "40%" }}
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
