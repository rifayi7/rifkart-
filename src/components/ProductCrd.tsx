import { Eye, Heart, Shuffle } from "lucide-react";
import type { ProductType } from "../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store/store";
import { addToCart } from "../redux/slice/cartSlice";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type ProductCardtype = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardtype) {
  const { items: cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const alreadyIn = cartItems.some((p) => p.id === product.id);

  const handleAddCart = (products: ProductType) => {
    if (!alreadyIn) {
      const { id, name, image, quantity, price } = product;
      const cartItem = {
        id: id,
        name,
        size: "M",
        quantity,
        image,
        price,
      };

      dispatch(addToCart(cartItem));
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="h-auto sm:h-auto rounded-2xl border-3 border-[#f3f4f6] ">
      <div className=" h-[85%] relative z-1 ">
        <div className="absolute right-0 w-[20%] z-5 flex flex-col items-center gap-5 text-tiddy-gray mt-4">
          <Heart
            size={25}
            className="rounded-full bg-gray-100 p-[5px] cursor-pointer hover:bg-amber-300 hover:text-white"
          />
          <Shuffle
            size={25}
            className="rounded-full bg-gray-100 p-[5px] cursor-pointer hover:bg-amber-300 hover:text-white"
          />
          <Eye
            size={25}
            className="rounded-full bg-gray-100 p-[5px] cursor-pointer hover:bg-amber-300 hover:text-white"
          />
        </div>
        <div className="h-[80%]  w-full group ">
          <img
            src={product.image}
            alt={product.name}
            className="scale-100 group-hover:scale-115 transition-transform duration-300 group-hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center h-[20%]   justify-center">
          <h1 className="font-bold text-[15px] text-tiddy-black">
            {product.name}
          </h1>
          <h2 className="text-tiddy-gray text-[13px]">
            {product.category.toUpperCase()}
          </h2>
        </div>
      </div>
      <div className="h-[15%]  text-gray-600 font-semibold flex items-center text-center border-t border-neutral-100 divide-x divide-neutral-100">
        <span className="w-[50%]">$ {product.price.toFixed(2)}</span>
        <button
          onClick={() => handleAddCart(product)}
          className={`w-[50%] ${
            product.quantity > 0
              ? "cursor-pointer hover:text-amber-400"
              : "text-gray-400"
          } `}
          disabled={product.quantity === 0}
        >
          {alreadyIn
            ? "Go to cart"
            : product.quantity === 0
            ? "Out of Stock"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
