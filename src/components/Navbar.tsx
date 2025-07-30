import { User, Shuffle, Heart, ShoppingBag, LogOut } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/ProtectPage";

export default function Navbar() {
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
        <li className="hover:text-amber-300">
          <Link to="cart" className="inline-flex gap-2">
            <span>
              <ShoppingBag />
            </span>
            $0.00
          </Link>
        </li>
      </ul>
    </nav>
  );
}
