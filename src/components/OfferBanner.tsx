import img1 from "../assets/offer-banner.webp";

export default function OfferBanner() {
  return (
    <div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundPositionY: "bottom",
        backgroundSize: "100% auto",
      }}
      className="h-[600px] w-full bg-[#ffebbe] bg-no-repeat relative rounded-[10px] mt-auto "
    >
      <div className="absolute inset-4 lg:inset-7 flex flex-col justify-between ">
        {/* Top Section */}
        <div className="text-tiddy-black ">
          <p className="uppercase text-sm font-medium mb-2">New Collection</p>
          <div className="flex items-center leading-none ">
            <p className="text-[60px] md:text-[70px] font-bold">40</p>
            <div className="flex flex-col text-[22px] md:text-[27px] font-bold  ">
              <span>%</span>
              <span className="uppercase">Off</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <button className="bg-tiddy-black text-white px-6 py-3 rounded-lg font-semibold w-full">
            View Offer
          </button>
        </div>
      </div>
    </div>
  );
}
