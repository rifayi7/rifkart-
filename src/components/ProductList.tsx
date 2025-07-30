import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store/store";
import { fetchProducts } from "../redux/slice/productSlice";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {items.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
