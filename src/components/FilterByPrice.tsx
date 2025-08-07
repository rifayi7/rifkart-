import { useState } from "react";

export default function FilterByPrice({ priceFilter }: any) {
  return (
    // <div className="w-full max-w-md mx-auto p-4">
    //   <h2 className="font-bold text-lg mb-4">Filter by price</h2>
    //   {/* <h1 className="p-10"> {value}</h1> */}
    //   <div className="relative rounded-2xl w-full h-1 bg-gray-400">
    //     <input
    //       type="range"
    //       className="absolute  slider appearance-none w-full h-full  accent-amber-300"
    //       step={100}
    //       min={100}
    //       max={1000}
    //       onChange={(e) => priceFilter(Number(e.target.value))}
    //     />
    //   </div>

    //   <p className="text-gray-600 font-medium">
    //     Price: <span className="text-black font-bold">$0</span> -
    //     <span className="text-black font-bold">$1000</span>
    //   </p>
    // </div>

    <div className="flex flex-col gap-4 text-gray-700 font-light mb-[40px]">
      <h1 className="font-bold text-black">Filter by price</h1>

      <div className="relative rounded-2xl w-full h-1 bg-amber-300">
        <input
          type="range"
          className="absolute slider appearance-none w-full h-full accent-amber-300"
          step={100}
          min={100}
          max={1000}
          onChange={(e) => priceFilter(Number(e.target.value))}
        />
      </div>

      {/* <p className="text-gray-600 font-medium text-sm">
        Price: <span className="text-black font-bold">$100</span> -
        <span className="text-black font-bold">$1000</span>
      </p> */}
    </div>
  );
}
