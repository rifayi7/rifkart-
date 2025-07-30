import { useNavigate } from "react-router-dom";
import BlackContainer from "../components/BlackContainer";
import ProductSection from "../components/ProductSection";
import ShopHeroSection from "../components/ShopHeroSection";
import { useEffect, useState } from "react";

export default function Shop() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/signup");
    } else {
      setLoading(true);
    }
  }, []);
  if (!loading) return <h1 className="text-6xl">Loading.......</h1>;
  return (
    <>
      <ShopHeroSection />
      <ProductSection />
      <BlackContainer />
    </>
  );
}
