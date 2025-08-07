import {
  User,
  Shuffle,
  Heart,
  LogOut,
  Menu,
  MapPin,
  PhoneCall,
  Smartphone,
  Clock,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/ProtectPage";
import { Handbag } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import { useEffect, useState } from "react";
import logo from "../assets/Logo.svg";
import CartTotalPrice from "./utils/CartTotalPrice";

export default function Navbar() {
  const { items } = useSelector((state: RootState) => state.cart);

  const cartTotalPrice = CartTotalPrice(items);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const links = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "NEWS", path: "/news" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const services = [
    {
      icon: MapPin,
      label: "Address:",
      value: "Street Name, NY 38954",
    },
    {
      icon: PhoneCall,
      label: "Phone:",
      value: "578-393-4937",
    },
    {
      icon: Smartphone,
      label: "Mobile:",
      value: "578-393-4937",
    },
    {
      icon: Clock,
      label: "Opening hours",
      value: "9AM - 5PM",
    },
  ];

  const { isAuth, logout } = useAuth();
  return (
    <nav
      className={`flex  justify-between items-center text-[10px] lg:text-[12px] 
     text-tiddy-gray min-h-15 relative ${menuOpen && "overflow-hidden"}`}
    >
      <div className="  ml-1 flex items-center ">
        <img src={logo} className="w-7 h-10 fill-amber-300" />
        <h1 className="text-tiddy-black">Tiddy</h1>
      </div>
      <ul className="left hidden md:flex gap-1 lg:gap-2 items-center mx-1">
        {links.map(({ name, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `py-2 px-[1px] lg:py-5 lg:px-2 ${
                  isActive ? "border-b-2 text-tiddy-black" : ""
                }`
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* right */}
      <ul className="right gap-2  flex">
        <li className="hover:text-amber-300 ">
          {!isAuth ? (
            <NavLink to="/login" className="flex gap-0 lg:gap-2 items-center">
              <span>
                <User />
              </span>
              LOGIN
            </NavLink>
          ) : (
            <button
              onClick={logout}
              className="flex gap-0 lg:gap-2 items-center"
            >
              <span>
                <LogOut />
              </span>
              LOGOUT
            </button>
          )}
        </li>
        <li className="hover:text-amber-300 hidden md:block">
          <a href="#" className="md:flex gap-0 lg:gap-2 items-center">
            <span>
              <Shuffle />
            </span>
            COMPARE
          </a>
        </li>
        <li className="hover:text-amber-300 hidden md:block">
          <a href="#" className="md:flex gap-0 lg:gap-2 items-center">
            <span>
              <Heart />
            </span>
            WISHLIST
          </a>
        </li>
        <li className="hover:text-amber-300 relative">
          <Link to="cart" className="flex gap-0 lg:gap-2 items-center">
            <span>
              <Handbag />
            </span>
          </Link>
          {items.length > 0 && (
            <span className="absolute inset-0 w-3 h-4 text-[10px] text-center hover:text-bl bg-amber-300 text-black rounded-full   ">
              {items.length}
            </span>
          )}
        </li>
        <li className="hover:text-amber-300 md:hidden">
          <a href="#" className="flex gap-0 lg:gap-2 items-center">
            <span>
              <Menu onClick={() => setMenuOpen(true)} />
            </span>
          </a>
        </li>
      </ul>

      {/* hamberger menu */}
      <div
        className={`${
          menuOpen ? "md:hidden" : "hidden"
        } fixed inset-0 backdrop-blur-2xl flex flex-row-reverse  bg-white/60 w-full h-full z-20`}
      >
        <div className="inset-0 w-3/4 h-screen p-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  rounded bg-white flex flex-col gap-10">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 justify-self-end h-fit p-1"
          >
            <X />
          </button>
          <div className="w-10 h-10">
            <img src={logo} alt="logo" />
          </div>
          <ul className="flex flex-col gap-5">
            {links.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-[15px] ${isActive ? " text-amber-300" : ""}`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-5 ">
            {services.map(({ icon: Icon, label, value }, index) => (
              <li key={index} className="flex  gap-4 items-center">
                <div
                  className="w-7 h-7 rounded-full 
                shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                  flex items-center justify-center text-gray-400"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-gray-500 ">
                  <p className="">{label}:</p>
                  <p className="">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <ul className="md:hidden">
        <li className="hover:text-amber-300">
          <a href="#" className="flex gap-0 lg:gap-2 items-center">
            <span>
              <Menu />
            </span>
          </a>
        </li>
      </ul> */}
    </nav>
  );
}
