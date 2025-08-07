import img2 from "../assets/shop-hero-images/shop-hero-image-1.webp";
import img1 from "../assets/shop-hero-images/shop-hero-image-2.webp";
import img3 from "../assets/shop-hero-images/shop-hero-image-3.webp";
import { ArrowUpRight } from "lucide-react";

export default function ShopHeroSection() {
  return (
    <div className="w-full flex flex-wrap lg:flex-nowrap  gap-5 text-tiddy-black ">
      <div className="w-full mx-auto lg:mx-0 sm:w-[47%] sm:lg:w-[30%] min-h-[350px] overflow-hidden rounded-2xl relative group ">
        <div className="absolute  flex flex-col inset-0 justify-between   bg-transparent m-6 z-2">
          <div className="flex justify-between items-center">
            <span className="px-1 py-2 text-[12px]  bg-white rounded-[5px]">
              Collections
            </span>
            <div className="h-full rounded-full bg-white p-2 ">
              <ArrowUpRight />
            </div>
          </div>
          <h2 className="text-white font-medium text-[20px]">
            Blandit Natoque Elementum Nascetur
          </h2>
        </div>
        <img
          src={img1}
          alt="shop-image"
          className="rounded-2xl w-full h-full object-cover scale-100  group-hover:scale-110 transition-transform duration-300 z-1"
        />
      </div>
      <div className="w-full mx-auto lg:mx-0 sm:w-[47%] lg:w-[25%] min-h-[350px] overflow-hidden rounded-2xl relative group">
        <div className="absolute  flex flex-col inset-0 justify-between   bg-transparent m-6 z-2">
          <div className="flex justify-between items-center">
            <span className="px-1 py-2 text-[12px]  bg-white rounded-[5px]">
              Collections
            </span>
            <div className="h-full rounded-full bg-white p-2 ">
              <ArrowUpRight />
            </div>
          </div>
          <h2 className="text-white font-medium text-[20px]">
            Fermentum Maximus Consecte Bingilla
          </h2>
        </div>
        <img
          src={img2}
          alt="shop-image-2"
          className="rounded-2xl w-full h-full object-cover group-hover:scale-110 z-1 transition-transform duration-300"
        />
      </div>
      <div className="lg:w-[45%] min-h-[350px] overflow-hidden rounded-2xl relative group">
        <div className="absolute  flex flex-col inset-0 justify-between   bg-transparent m-6 z-2">
          <div className="flex justify-between items-center">
            <span className="px-1 py-2 text-[12px]  bg-white rounded-[5px]">
              Collections
            </span>
            <div className="h-full rounded-full bg-white p-2 ">
              <ArrowUpRight />
            </div>
          </div>
          <h2 className="text-white font-medium text-[20px]">
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
