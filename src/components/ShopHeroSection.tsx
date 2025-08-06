import img2 from "../assets/shop-hero-images/shop-hero-image-1.webp";
import img1 from "../assets/shop-hero-images/shop-hero-image-2.webp";
import img3 from "../assets/shop-hero-images/shop-hero-image-3.webp";
import { ArrowUpRight } from "lucide-react";

export default function ShopHeroSection() {
  return (
    <div className="w-full flex h-[500px] gap-5 text-tiddy-black">
      <div className="w-[30%] h-full overflow-hidden rounded-2xl relative group ">
        <div className="absolute  flex flex-col inset-0 justify-between   bg-transparent m-10 z-2">
          <div className="flex justify-between items-center">
            <span className="px-4 py-3  bg-white rounded-2xl">Collections</span>
            <div className="h-full rounded-full bg-white p-3 ">
              <ArrowUpRight />
            </div>
          </div>
          <h2 className="text-white font-bold text-[20px]">
            Blandit Natoque Elementum Nascetur
          </h2>
        </div>
        <img
          src={img1}
          alt="shop-image"
          className="rounded-2xl w-full h-full object-cover scale-100  group-hover:scale-110 transition-transform duration-300 z-1"
        />
      </div>
      <div className="w-[25%] h-full overflow-hidden rounded-2xl relative group">
        <div className="absolute  flex flex-col inset-0 justify-between   bg-transparent m-10 z-2">
          <div className="flex justify-between items-center">
            <span className="px-4 py-3  bg-white rounded-2xl">Collections</span>
            <div className="h-full rounded-full bg-white p-3 ">
              <ArrowUpRight />
            </div>
          </div>
          <h2 className="text-white font-bold text-[20px]">
            Blandit Natoque Elementum Nascetur
          </h2>
        </div>
        <img
          src={img2}
          alt="shop-image-2"
          className="rounded-2xl w-full h-full object-cover group-hover:scale-110 z-1 transition-transform duration-300"
        />
      </div>
      <div className="w-[45%] h-full overflow-hidden rounded-2xl relative group">
        <div className="absolute  flex flex-col inset-0 justify-between   bg-transparent m-10 z-2">
          <div className="flex justify-between items-center">
            <span className="px-4 py-3  bg-white rounded-2xl">Collections</span>
            <div className="h-full rounded-full bg-white p-3 ">
              <ArrowUpRight />
            </div>
          </div>
          <h2 className="text-white font-bold text-[20px]">
            Blandit Natoque Elementum Nascetur
          </h2>
        </div>
        <img
          src={img3}
          alt="shop-image-2"
          className="rounded-2xl w-full h-full object-cover group-hover:scale-110 z-1 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
