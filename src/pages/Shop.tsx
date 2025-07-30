import { useNavigate } from "react-router-dom";
import BlackContainer from "../components/BlackContainer";
import ProductSection from "../components/ProductSection";
import ShopHeroSection from "../components/ShopHeroSection";
import { useEffect, useState } from "react";
import { useAuth } from "../context/ProtectPage";

export default function Shop() {
  const [ready, setReady] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isAuth, loading } = useAuth();
  useEffect(() => {
    console.log(isAuth);
    if (!isAuth) {
      if (!loading) {
        navigate("/signup");
      }
    }
    setReady(true);
  }, [isAuth, loading]);
  if (!ready) return <h1 className="text-6xl">Loading.......</h1>;
  return (
    <>
      <ShopHeroSection />
      <ProductSection />
      <BlackContainer />
    </>
  );
}
