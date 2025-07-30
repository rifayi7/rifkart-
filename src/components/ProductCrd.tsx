import { Eye, Heart, Shuffle } from "lucide-react";

export default function ProductCard({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="h-[390px] rounded-2xl border-3 border-[#f3f4f6]">
      <div className="h-[85%] relative z-1">
        <div className="absolute right-0 w-[20%] z-5 flex flex-col items-center gap-5 text-tiddy-gray mt-4">
          <Heart
            size={25}
            className="rounded-full bg-gray-100 p-[5px] cursor-pointer hover:bg-amber-300 hover:text-white"
          />
          <Shuffle
            size={25}
            className="rounded-full bg-gray-100 p-[5px] cursor-pointer hover:bg-amber-300 hover:text-white"
          />
          <Eye
            size={25}
            className="rounded-full bg-gray-100 p-[5px] cursor-pointer hover:bg-amber-300 hover:text-white"
          />
        </div>
        <div className="h-[70%] w-full group">
          <img
            src={imgSrc}
            className="scale-100 group-hover:scale-115 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col items-center h-[30%] justify-center">
          <h1 className="font-bold text-[15px] text-tiddy-black">
            Augue Nullam
          </h1>
          <h2 className="text-tiddy-gray text-[13px]">HATS & SCARF</h2>
        </div>
      </div>
      <div className="h-[15%] text-gray-600 font-semibold flex items-center text-center border-t border-neutral-100 divide-x divide-neutral-100">
        <span className="w-[50%]">$ 25.00</span>
        <span className="w-[50%] cursor-pointer hover:text-amber-400">
          Add to cart
        </span>
      </div>
    </div>
  );
}
