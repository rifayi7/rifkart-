// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Signup from "./components/Signup";
import AddressPage from "./components/AddressPage";
import CheckoutPage from "./components/CheckoutPage";
import { AuthProvider } from "./context/ProtectPage";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import ProductDetails from "./components/ProductDetails";
import PageNotFound from "./components/pageNotFound";
import PrivateRoute from "./components/PrivateRoutes";

export default function App() {
  return (
    <div className="">
      <Router>
        <AuthProvider>
          <Provider store={store}>
            <Navbar />
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/address" element={<AddressPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Shop />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Provider>
        </AuthProvider>
      </Router>
    </div>
  );
}
