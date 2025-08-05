import { useSelector } from "react-redux";
import type { cartType } from "../../redux/slice/cartSlice";

export default function CartTotalPrice(items: cartType[]) {
  const total = items.reduce((acc, cur) => {
    const total = acc + cur.price * cur.quantity;
    return total;
  }, 0);

  return total;
}
