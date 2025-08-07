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
  const links = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "NEWS", path: "/news" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
  ];
  return (
    <nav className="flex justify-between items-center  text-[10px] text-tiddy-gray min-h-15 flex-wrap">
      <ul className="left flex gap-5 items-center">
        {links.map(({ name, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "border-b-2 text-tiddy-black" : ""
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="right flex gap-2 ">
        <li className="hover:text-amber-300 ">
          {!isAuth ? (
            <NavLink to="/login" className="flex gap-2 items-center">
              <span>
                <User />
              </span>
              LOGIN
            </NavLink>
          ) : (
            <button onClick={logout} className="flex gap-2 items-center">
              <span>
                <LogOut />
              </span>
              LOGOUT
            </button>
          )}
        </li>
        <li className="hover:text-amber-300">
          <a href="#" className="flex gap-2 items-center">
            <span>
              <Shuffle />
            </span>
            COMPARE
          </a>
        </li>
        <li className="hover:text-amber-300">
          <a href="#" className="flex gap-2 items-center">
            <span>
              <Heart />
            </span>
            WISHLIST
          </a>
        </li>
        <li className="hover:text-amber-300 relative">
          <Link to="cart" className="flex gap-2 items-center">
            <span>
              <Handbag />
            </span>
            $0.00
          </Link>
          {/* {items.length > 0 && (
            <span className="absolute inset-0 w-3 h-3 text-[10px] text-center bg-green-400 rounded-full">
              {items.length}
            </span>
          )} */}
        </li>
      </ul>
    </nav>
  );
}
