import { User, Shuffle, Heart, ShoppingBag } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <ul className="left flex gap-5">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <a href="#">NEWS</a>
        </li>
        <li>
          <a href="#">ABOUT US</a>
        </li>
        <li>
          <a href="#">CONTACT US</a>
        </li>
      </ul>
      <ul className="right flex gap-2">
        <li className="hover:text-amber-300 ">
          <NavLink to="/login" className="inline-flex gap-2">
            <span>
              <User />
            </span>
            LOGIN
          </NavLink>
        </li>
        <li className="hover:text-amber-300">
          <a href="#" className="inline-flex gap-2">
            <span>
              <Shuffle />
            </span>
            COMPARE
          </a>
        </li>
        <li className="hover:text-amber-300">
          <a href="#" className="inline-flex gap-2">
            <span>
              <Heart />
            </span>
            WISHLIST
          </a>
        </li>
        <li className="hover:text-amber-300">
          <a href="#" className="inline-flex gap-2">
            <span>
              <ShoppingBag />
            </span>
            $0.00
          </a>
        </li>
      </ul>
    </nav>
  );
}
