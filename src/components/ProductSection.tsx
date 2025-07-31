import Filter from "../pages/Filter";
import ProductCard from "../components/ProductCrd";
import type { ProductType } from "../redux/slice/productSlice";
import { useEffect, useState } from "react";

type ProductSectionType = {
  products: ProductType[];
};

export default function ProductSection({ products }: ProductSectionType) {
  const [productPages, setProductPages] = useState<number>(0);
  useEffect(() => {
    // console.log(products.length);
    // const pageModulus = products.length % 12;
    // const pageDivision = products.length / 12;
    // if (pageModulus === 0) {
    //   setProductPages(pageDivision);
    // } else {
    //   setProductPages(Math.floor(pageDivision) + 1);
    // }
    const pageNum = products.length / 12;
    setProductPages(Math.floor(pageNum) + 1);
  });

  const [startIndex, setSatrtIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const showingPageNum = products.slice(startIndex, endIndex);

  const handleIndexPage = (pageNum: number) => {
    if (pageNum > 1) {
      setSatrtIndex((pageNum - 1) * 9 + 1);
      setEndIndex(pageNum * 9);
      console.log("triggered");
    } else {
      setSatrtIndex(0);
      setEndIndex(9);
      console.log("triggered2");
    }
  };

  return (
    <div className="flex w-full">
      {/* Left Product Area */}
      <div className="left w-full md:max-w-[70%] bg-white m-[.5%]">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from(showingPageNum, (products, index) => (
            <ProductCard key={products.id || index} product={products} />
          ))}
          {/* {products.map((product, index) => (
            <ProductCard key={product.id || index} product={product} />
          ))} */}
        </div>

        {/* Pagination Button */}
        <div className="flex justify-center mt-6 gap-6">
          {productPages !== 0 ? (
            Array.from({ length: productPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handleIndexPage(i + 1)}
                className="bg-[#FDB016] w-9 h-9 text-white rounded mx-1 cursor-pointer"
              >
                {i + 1}
              </button>
            ))
          ) : (
            <button className="bg-[#FDB016] w-9 h-9 text-white rounded mx-1">
              0
            </button>
          )}
        </div>
      </div>

      {/* Right Filter Area */}
      <div className="right w-[30%] md:block hidden p-8">
        <Filter />
      </div>
    </div>
  );
}
