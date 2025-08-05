import CartTotalPrice from "./utils/CartTotalPrice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import { useEffect, useState, type FormEvent } from "react";
import {
  addAddress,
  updateAddress,
  type addressType,
} from "../redux/slice/addressSlice";
import { CirclePlus, SquarePen, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddressPage() {
  const { items } = useSelector((state: RootState) => state.cart);
  const [isChecked, setIsChecked] = useState<null | number>(null);
  const [addressExpand, setAddressExpand] = useState<boolean>(false);
  const [editAddress, setEditAddress] = useState<addressType | null>(null);
  const [editDisplay, setEditDisplay] = useState<boolean>(false);
  const cartPriceTotal = CartTotalPrice(items);
  const { items: addressList, errors } = useSelector(
    (state: RootState) => state.address
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleNavigate = () => {
    navigate("/checkout");
  };

  const handleAddressAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fromData = new FormData(event.currentTarget);
    const fname = fromData.get("fname") as string;
    const lname = fromData.get("lname") as string;
    const email = fromData.get("email") as string;
    const phone = Number(fromData.get("phone") as string);
    const address = fromData.get("address") as string;
    const city = fromData.get("city") as string;
    const state = fromData.get("state") as string;
    const zip = Number(fromData.get("zip") as string);

    const addreslList = {
      id: addressList.length,
      fname,
      lname,
      email,
      phone,
      addressline: address,
      city,
      state,
      zip,
    };
    if (fname && lname && email && phone && address && city && state && zip) {
      dispatch(addAddress(addreslList));
      event.currentTarget.reset();
      setAddressExpand(false);
    }
  };
  useEffect(() => {
    console.log(editAddress);
  }, [addressList]);

  const handleUpdatingAddress = (value: number) => {
    setAddressExpand(false);
    const selectedAddress = addressList.find((address) => address.id === value);
    console.log("try to update");
    if (selectedAddress !== undefined) {
      console.log("matched address");
      setEditDisplay(true);
      setEditAddress({ ...selectedAddress });
    }
  };

  const handleAddressOnChanging = (
    prev: null | addressType,
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: keyof addressType
  ) => {
    setEditAddress((prev) =>
      prev ? { ...prev, [inputName]: e.target.value } : null
    );
  };

  const handleAddressUpdateSubmit = () => {
    if (editAddress !== null) {
      dispatch(updateAddress(editAddress));
      setEditDisplay(false);
      setEditAddress(null);
      setIsChecked(null);
    }
  };
  return (
    <div className="h-screen  flex flex-col pb-1 relative">
      {editDisplay && (
        <div className="fixed flex items-center backdrop-blur-sm  inset-0 bg-white/5  z-5">
          <div className="w-[30%] bg-white border-2 border-neutral-100 h-[700px] mx-auto rounded-2xl flex flex-col relative overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setEditDisplay(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold z-10"
            >
              &times;
            </button>

            {/* Heading */}
            <h2 className="text-xl font-semibold text-center mt-6">
              Edit Address
            </h2>

            {/* Scrollable form content */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <input
                className="w-full border p-2 rounded"
                placeholder="First Name"
                value={editAddress?.fname}
                onChange={(e) =>
                  handleAddressOnChanging(editAddress, e, "fname")
                }
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="Last Name"
                value={editAddress?.lname}
                onChange={(e) =>
                  handleAddressOnChanging(editAddress, e, "lname")
                }
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="Phone"
                value={editAddress?.phone}
                onChange={(e) =>
                  handleAddressOnChanging(editAddress, e, "phone")
                }
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="Email"
                value={editAddress?.email}
                onChange={(e) =>
                  handleAddressOnChanging(editAddress, e, "email")
                }
              />
              <input
                value={editAddress?.addressline}
                className="w-full border p-2 rounded"
                placeholder="City"
                onChange={(e) =>
                  handleAddressOnChanging(editAddress, e, "addressline")
                }
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="State"
                value={editAddress?.state}
                onChange={(e) =>
                  handleAddressOnChanging(editAddress, e, "state")
                }
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="Zip Code"
                value={editAddress?.zip}
                onChange={(e) => handleAddressOnChanging(editAddress, e, "zip")}
              />
              {/* Add more fields as needed */}
            </div>

            {/* Bottom button */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => handleAddressUpdateSubmit()}
                className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <h1 className="font-bold text-4xl mb-6">Shipping Address</h1>
      {errors && <h1 className="text-4xl text-red-600">{errors}</h1>}

      <div className="flex flex-col lg:flex-row gap-6  flex-1 min-h-0 ">
        {/* Left - Address Form */}
        <div
          className={`w-full lg:w-[65%] border border-[#e6eaec] p-6 rounded-md ${
            addressExpand ? "h-auto" : "h-fit"
          }`}
        >
          {!addressExpand && (
            <div className="flex justify-between ">
              <h2 className="text-lg font-semibold mb-4">Add new address</h2>
              <CirclePlus
                onClick={() => setAddressExpand(true)}
                className="cursor-pointer"
              />
            </div>
          )}
          <form
            onSubmit={handleAddressAdd}
            className={`space-y-4 ${addressExpand ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="fname"
                type="text"
                placeholder="First Name"
                required
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
              />
              <input
                name="lname"
                type="text"
                placeholder="Last Name"
                required
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
            />
            <input
              name="phone"
              type="text"
              required
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
            />
            <input
              name="address"
              required
              type="text"
              placeholder="Address Line"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                name="city"
                type="text"
                required
                placeholder="City"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
              />
              <input
                name="state"
                type="text"
                placeholder="State"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
              />
              <input
                name="zip"
                required
                type="text"
                placeholder="Zip Code"
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg"
            >
              Save Address
            </button>
          </form>
        </div>

        {/* Right - Address List */}
        <div className="border-[#e6eaec] border p-6 rounded-md w-full flex flex-col lg:w-[35%] bg-green-50 max-h-full min-h-0">
          {/* Scrollable section */}
          <div className="overflow-y-auto space-y-4 flex-1">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>

            {addressList.length > 0 &&
              addressList.map((address, index) => (
                <div
                  key={index}
                  className="w-full bg-gray-50 p-4 rounded flex gap-4 border border-gray-200"
                >
                  <div className="pt-1 h-auto">
                    <input
                      type="radio"
                      className="w-5 h-5"
                      checked={index === isChecked}
                      onChange={() => setIsChecked(index)}
                      id={`address${index}`}
                      name="selectedAddress"
                    />
                  </div>

                  <div className="flex-1 ">
                    <label
                      htmlFor={`address${index}`}
                      className="cursor-pointer block"
                    >
                      <h2 className="text-lg font-semibold">
                        {address.fname} {address.lname}
                      </h2>
                      <p>{address.phone}</p>
                      <p>{address.email}</p>
                    </label>
                  </div>

                  {isChecked === index && (
                    <div className="pt-1 h-auto flex flex-col justify-between">
                      <SquarePen
                        onClick={() => handleUpdatingAddress(address.id)}
                        className="text-gray-500 hover:text-black cursor-pointer"
                      />
                      <Trash className="mt-auto text-red-500 cursor-pointer" />
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* Fixed bottom button */}
          <button
            disabled={isChecked === null}
            onClick={() => handleNavigate()}
            className={`w-full   text-white font-semibold py-3 rounded-lg ${
              isChecked !== null
                ? "hover:cursor-pointer bg-gray-900"
                : "bg-gray-600 opacity-60"
            } mt-4`}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
