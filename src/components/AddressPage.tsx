export default function AddressPage() {
  return (
    <div className="">
      <h1 className="font-bold text-4xl mb-6">Shipping Address</h1>

      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Left - Address Form */}
        <div className="w-full lg:w-[65%] border border-[#e6eaec] p-6 rounded-md">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
            />
            <input
              type="text"
              placeholder="Address Line"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
              />
              <input
                type="text"
                placeholder="State"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg">
              Save Address
            </button>
          </form>
        </div>

        {/* Right - Summary or Message */}
        <div className="w-full lg:w-[35%] sticky top-0 self-start">
          <div className="border-[#e6eaec] border p-6 rounded-md w-full">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between text-gray-700 mb-2">
              <span className="font-semibold">Items</span>
              <span>$120.00</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between text-gray-800 font-bold text-lg mb-4">
              <span>Total</span>
              <span>$130.00</span>
            </div>

            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg">
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
