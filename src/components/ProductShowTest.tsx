import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  color: string;
  quantity: number;
  stock: number;
  size: string[];
  description: string;
  image: string;
  newAdded: boolean;
};

export default function ProductShowTest() {
  const [products, setProduct] = useState<ProductType[] | null>(null);
  useEffect(() => {
    fetch("http://localhost:5174/products")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div>
      {products?.map((product, index) => {
        return (
          <div key={index}>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <img src={product.image} alt={product.name} />
          </div>
        );
      })}
    </div>
  );
}
