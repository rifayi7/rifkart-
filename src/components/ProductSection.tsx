import Filter from "../pages/Filter";
import ProductCard from "../components/ProductCrd";
import { addProduct, type ProductType } from "../redux/slice/productSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";

type ProductSectionType = {
  products: ProductType[];
};

export default function ProductSection({ products }: ProductSectionType) {
  const [showingProductItems, setShowingProductItems] =
    useState<ProductType[]>(products);
  const [displayItems, setDisplayItems] = useState<ProductType[]>([]);
  const [itemFiltered, setItemFiltered] = useState<ProductType[]>([]);
  const [pagenUm, setPageNum] = useState<number>(0);

  let productsPerPage = 12;
  useEffect(() => {
    const totalPageNum = Math.ceil(
      showingProductItems.length / productsPerPage
    );
    setPageNum(totalPageNum);
    const sliced = showingProductItems.slice(0, productsPerPage);
    setDisplayItems(sliced);
  }, [showingProductItems]);

  const handlePageChange = (value: number) => {
    // 0 9    1
    // 10 18     2  2-1 *9 +1
    // 19 27      3   3-1 *9 +1
    console.log("value is " + value);
    if (value > 1) {
      console.log("in 0");

      const last = productsPerPage * value;
      const start = (value - 1) * productsPerPage;
      const sliced = showingProductItems.slice(start, last);
      setDisplayItems(sliced);
    }
    if (value === 1) {
      console.log("in 1");
      const sliced = showingProductItems.slice(0, productsPerPage);
      setDisplayItems(sliced);
    }
  };

  //price filter
  const priceFilter = (price: number) => {
    console.log("triggered");
    const priceFiltered = products.filter((p) => p.price <= price);
    setShowingProductItems(priceFiltered);
  };

  //category filter
  const categoryFilter = (category: string) => {
    const filtered = products.filter((c) => c.category === category);

    if (itemFiltered.length === 0) {
      setShowingProductItems(filtered);
      setItemFiltered(filtered);
      console.log("0 ");
    } else {
      console.log("not 0 ");
      const isalreadyIn = itemFiltered.some((c) => c.category === category);
      if (isalreadyIn) {
        const newFilter = itemFiltered.filter((c) => c.category !== category);
        setShowingProductItems(newFilter);
        setItemFiltered(newFilter);
        console.log("same item ");
        if (newFilter.length === 0) {
          console.log("prevetn empty");
          setShowingProductItems(products);
        }
      } else {
        console.log("another item");
        const finalFilter = products.filter((c) => c.category === category);
        setShowingProductItems((prev) => [...prev, ...finalFilter]);
        setItemFiltered((prev) => [...prev, ...finalFilter]);
      }
    }
  };
  //color filter
  const colorFilter = (color: string) => {
    const filteredProducts = products.filter(
      (product) => product.color === color
    );
    setShowingProductItems(filteredProducts);
  };

  // const dispatch = useDispatch<AppDispatch>();
  // const { items, loading, error } = useSelector(
  //   (state: RootState) => state.products
  // );

  // const testItem = {
  //   id: "28",
  //   name: "sudusudy",
  //   brand: "Rifwear",
  //   category: "Clothing",
  //   price: 749,
  //   color: "Orange",
  //   quantity: 1,
  //   stock: 13,
  //   size: ["S", "M", "L"],
  //   description: "Chunky knit cable sweater for a warm winter.",
  //   image:
  //     "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
  //   newAdded: false,
  // };

  // const handleAddProduct = () => {
  //   dispatch(addProduct(testItem));
  //   if (error) console.log(error);
  // };

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  return (
    <>
      {/* {error && <h1 className="text-red-600 text-6xl">{error}</h1>} */}
      <div className="flex w-full ">
        {/* left filter */}
        <div className="left w-full md:max-w-[65%]  m-[.5%] flex flex-col justify-between ">
          <div className="grid  pcrd:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {displayItems &&
              Array.from(displayItems, (products, index) => (
                <ProductCard key={products.id || index} product={products} />
              ))}
          </div>
          <div className="flex justify-center items-center gap-6 min-h-30 mt-auto ">
            {pagenUm !== 0 ? (
              Array.from({ length: pagenUm }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
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

        {/* right filter  */}
        <div className="right w-[35%] md:block hidden p-8 pr-0 ">
          <Filter
            colorFilter={colorFilter}
            categoryFilter={categoryFilter}
            products={products}
            priceFilter={priceFilter}
          />
        </div>
      </div>
    </>
  );
}
