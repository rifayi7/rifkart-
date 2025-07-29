import img1 from "../assets/best-selling/product-image-42.webp";

export default function BestSelling() {
  return (
    <div className="flex flex-col space-y-4  text-tiddy-black">
      <h1 className="font-bold text-black">Best selling </h1>
      <div className="flex  gap-3">
        <div className="left w-[75px] h-[75px] border border-neutral-300 rounded-[10px] hover:overflow-hidden">
          <img
            src={img1}
            alt="img1"
            className="object-cover w-full h-full hover:scale-125 "
          />
        </div>
        <div className="right text-[15px] flex flex-col justify-evenly font-medium">
          <h2 className="">Justo Finibus</h2>
          <h2 className="text-tiddy-gray">$15.00</h2>
        </div>
      </div>
    </div>
  );
}
