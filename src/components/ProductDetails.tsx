import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { type AppDispatch, type RootState } from "../redux/store/store";
import { fetchProducts } from "../redux/slice/productSlice";
import { ChevronDown, ChevronUp } from "lucide-react";
import { addToCart, quantityReduceCart } from "../redux/slice/cartSlice";

export default function ProductDetails() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { items: productItems, loading } = useSelector(
    (state: RootState) => state.products
  );
  const { items: cartItems } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (productItems.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const product = productItems.find((item) => Number(item.id) === Number(id));

  const foundInCart = cartItems.find((item) => item.id === product?.id);
  const handleAddToCart = (value: string) => {
    if (!product) return;
    const { id, name, image, price, quantity } = product;
    const productToAdd = {
      id,
      name,
      size: "M",
      quantity,
      image,
      price,
    };
    if (value === "navigate") {
      navigate("/cart");
    }
    if (value === "add") {
      dispatch(addToCart(productToAdd));
    }
    if (value === "reduce") {
      if (product !== undefined) {
        dispatch(quantityReduceCart(productToAdd));
      }
    }
  };

  //   const addQty = () => {
  //     const foundInCart = cartItems.some((item) => item.id === product?.id);
  //   };
  console.log(cartItems);

  if (loading || !product) {
    return (
      <p className="text-center text-gray-500 py-20">Loading product...</p>
    );
  }

  return (
    <div className="w-full flex items-center flex-col md:flex-row">
      {/* {left} */}
      <div className="min-w-[50%] max-h-screen ">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain lg:object-cover max-w-full h-full "
        />
      </div>
      {/* {right} */}
      <div className="min-w-[50%] text-tiddy-gray p-10 font-light text-[15px] tracking-wider flex flex-col gap-10">
        <h1 className="text-2xl font-bold text-tiddy-black">{product.name}</h1>
        <p className="font-bold text-[22px]">${product.price}</p>
        <p>{product.description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          aliquam in eos consequuntur inventore delectus officiis? Cum, cumque
          veritatis mollitia sapiente nemo aliquam quia aliquid dolor. Ipsa
          quidem incidunt eius.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga culpa
          perspiciatis aliquid deleniti voluptatibus reiciendis, quo cumque
          veniam
        </p>
        <div className="flex w-full">
          <div
            className={` items-center border rounded-[10px]  w-[20%] h-full overflow-clip ${
              cartItems.length > 0 ? "flex" : "hidden"
            }`}
          >
            <input
              type="number"
              readOnly
              value={foundInCart ? foundInCart.quantity : 1}
              className="w-full h-full text-center  outline-none appearance-none"
            />

            <div className="flex flex-col min-h-full ">
              <button
                onClick={() => handleAddToCart("add")}
                className="min-h-[50%] "
              >
                <ChevronUp className="text-white hover:text-black bg-tiddy-black " />
              </button>
              <button
                disabled={foundInCart?.quantity === 1}
                className="min-h-[50%]"
              >
                <ChevronDown
                  onClick={() => handleAddToCart("reduce")}
                  className="text-white hover:text-black bg-tiddy-black "
                />
              </button>
            </div>
          </div>
          <button
            onClick={() => handleAddToCart(foundInCart ? "navigate" : "add")}
            className="w-full bg-black text-white rounded-[10px] min-h-[50px] cursor-pointer"
          >
            {foundInCart ? `Go to Cart` : `Add to cart`}
          </button>
        </div>
      </div>
    </div>
  );
}
