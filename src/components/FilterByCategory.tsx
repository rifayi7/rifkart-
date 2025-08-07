// export default function FilterByCategory() {
//   const categoryName = [
//     { name: "Toys & Games", count: 5 },
//     { name: "Dresses", count: 6 },
//     { name: "Hats & Scarfs", count: 6 },
//     { name: "Shoes & Socks", count: 6 },
//     { name: "Sweaters", count: 7 },
//     { name: "T-shirts", count: 5 },
//   ];

import { useEffect } from "react";

//   return (
//     <div className=" flex flex-col gap-4 text-gray-700 font-light">
//       <h1 className="font-bold text-black">Filter by category</h1>
//       {categoryName.map((category, idx) => (
//         <label
//           key={idx}
//           className="flex items-center justify-between cursor-pointer group"
//         >
//           {/* Left side: checkbox and label */}
//           <div className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               className="h-4 w-4 rounded-sm border-gray-200 text-white  checked:accent-amber-300 checked:text-white"
//             />

//             <span className="group-hover:text-amber-400">{category.name}</span>
//           </div>

//           {/* Right side: count */}
//           <span className="text-sm border min-w-7 text-center rounded-full text-gray-400 group-hover:text-white group-hover:bg-amber-300">
//             {category.count}
//           </span>
//         </label>
//       ))}
//     </div>
//   );
// }

export default function FilterByCategory({ categoryFilter, products }: any) {
  const categoryName = [
    { name: "Clothing", count: 9 },
    { name: "Accessories", count: 2 },
    { name: "Toys", count: 5 },
    { name: "Footwear", count: 1 },
  ];
  return (
    <div className="flex flex-col gap-4 text-gray-700 font-light mb-[40px]">
      <h1 className="font-bold text-black">Filter by category</h1>
      {categoryName.map((category, idx) => (
        <label
          key={idx}
          className="flex items-center justify-between cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <input
              onClick={() => categoryFilter(category.name)}
              type="checkbox"
              className="h-4 w-4 rounded-sm border-gray-300 accent-amber-300"
            />
            <span className="group-hover:text-amber-400">{category.name}</span>
          </div>

          <span className="text-sm border min-w-[28px] text-center rounded-full text-gray-400 group-hover:text-white group-hover:bg-amber-300">
            {category.count}
          </span>
        </label>
      ))}
    </div>
  );
}
