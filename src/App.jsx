import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import Home from "./components/home";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./pages/ProductDetails";

// Wrapper to handle navbar switching based on route
const Layout = () => {
  const location = useLocation();

  // Check current route
  const isProductDetails = location.pathname.startsWith("/product/");

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Conditionally render navbars */}
      {isProductDetails ? <Navbar2 /> : <Navbar />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductDetails />} />
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
