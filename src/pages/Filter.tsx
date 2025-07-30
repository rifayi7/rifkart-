import FilterByColour from "../components/FilterByColour";
import FilterByCategory from "../components/FilterByCategory";
import BestSelling from "../components/BestSelling";
import OfferBanner from "../components/OfferBanner";
import FilterByPrice from "../components/FilterByPrice";

export default function Filter() {
  return (
    <div className="mx-[1%]">
      <FilterByPrice />
      <FilterByColour />
      <FilterByCategory />
      <BestSelling />
      <OfferBanner />
    </div>
  );
}
