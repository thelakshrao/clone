import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import Home from "./components/home";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./pages/ProductDetails";
import AddAddress from "./components/AddAddress";
import OrderSummary from "./components/OrderSummary";
import PaymentPage from "./components/PaymentPage"; 

const Layout = () => {
  const location = useLocation();

  const path = location.pathname;
  const isSpecialPage =
    path.startsWith("/product/") ||
    path === "/add-address" ||
    path === "/order-summary" ||
    path === "/payment";

  return (
    <div className="bg-gray-200 min-h-screen">
      {isSpecialPage ? <Navbar2 /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/payment" element={<PaymentPage />} /> 
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
