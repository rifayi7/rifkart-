// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Signup from "./components/Signup";
import AddressPage from "./components/AddressPage";
import CheckoutPage from "./components/CheckoutPage";
import { AuthProvider } from "./context/ProtectPage";

export default function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/address" element={<AddressPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}
