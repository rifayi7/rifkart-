import FilterByColour from "../components/FilterByColour";
import FilterByCategory from "../components/FilterByCategory";
import BestSelling from "../components/BestSelling";
import OfferBanner from "../components/OfferBanner";

export default function Filter() {
  return (
    <div className="mx-[1%]">
      <FilterByColour />
      <FilterByCategory />
      <BestSelling />
      <OfferBanner />
    </div>
  );
}
