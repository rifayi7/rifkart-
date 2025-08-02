import { User, Shuffle, Heart, LogOut } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/ProtectPage";
import { Handbag } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import { useEffect } from "react";

export default function Navbar() {
  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {}, [items]);
  const { isAuth, logout } = useAuth();
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
          {!isAuth ? (
            <NavLink to="/login" className="inline-flex gap-2">
              <span>
                <User />
              </span>
              LOGIN
            </NavLink>
          ) : (
            <button onClick={logout} className="inline-flex gap-2">
              <span>
                <LogOut />
              </span>
              LOGOUT
            </button>
          )}
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
        <li className="hover:text-amber-300 relative">
          <Link to="cart" className="inline-flex gap-2">
            <span>
              <Handbag />
            </span>
            $0.00
          </Link>
          {items.length > 0 && (
            <span className="absolute inset-0 w-3 h-3 text-[10px] text-center bg-red-500 rounded-full">
              {items.length}
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
