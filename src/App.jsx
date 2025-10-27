import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import Home from "./components/home";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./pages/ProductDetails";
import AddAddress from "./components/AddAddress";
import OrderSummary from "./components/OrderSummary";

// Layout wrapper to conditionally show navbar
const Layout = () => {
  const location = useLocation();

  const isProductDetails = location.pathname.startsWith("/product/");
  const isAddAddress = location.pathname === "/add-address";
  const isOrderSummary = location.pathname === "/order-summary";

  return (
    <div className="bg-gray-200 min-h-screen">
      {isProductDetails || isAddAddress || isOrderSummary ? <Navbar2 /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/order-summary" element={<OrderSummary />} />
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
