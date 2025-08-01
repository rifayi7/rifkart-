import FilterByColour from "../components/FilterByColour";
import FilterByCategory from "../components/FilterByCategory";
import BestSelling from "../components/BestSelling";
import OfferBanner from "../components/OfferBanner";
import FilterByPrice from "../components/FilterByPrice";

export default function Filter({ colorFilter, categoryFilter, products }: any) {
  return (
    <div className="mx-[1%]">
      <FilterByPrice />
      <FilterByColour colorFilter={colorFilter} products={products} />
      <FilterByCategory categoryFilter={categoryFilter} />
      <BestSelling />
      <OfferBanner />
    </div>
  );
}
