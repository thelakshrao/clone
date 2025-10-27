import React from 'react'
import Category from "../components/category"
import Banner from "../components/banner"
import ProductGrid from "../components/ProductGrid";

const home = () => {
  return (
    <div className="min-h-screen">
      <Category/>
      <Banner/>
      <ProductGrid/>
    </div>
  )
}

export default home
