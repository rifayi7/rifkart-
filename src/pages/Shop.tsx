import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productSlice";
import type { AppDispatch, RootState } from "../redux/store/store";

import ShopHeroSection from "../components/ShopHeroSection";
import ProductSection from "../components/ProductSection";
import BlackContainer from "../components/BlackContainer";

export default function Shop() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <h1 className="text-6xl">Loading.......</h1>;
  }

  return (
    <>
      <ShopHeroSection />
      <ProductSection products={items} />
      <BlackContainer />
    </>
  );
}
