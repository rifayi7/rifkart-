import img1 from "../assets/product-images/product-image-9.webp";
import Filter from "../pages/Filter";
import ProductCard from "../components/ProductCrd"; // or adjust import path

export default function ProductSection() {
  const products = [img1, img1, img1]; // for now, 3 times same image

  return (
    <div className="flex w-full">
      <div className="left w-full md:max-w-[70%] bg-white grid grid-cols-2 lg:grid-cols-3 gap-8 m-[.5%]">
        {products.map((img, index) => (
          <ProductCard key={index} imgSrc={img} />
        ))}
      </div>

      <div className="right w-[30%] md:block hidden p-8">
        <Filter />
      </div>
    </div>
  );
}
