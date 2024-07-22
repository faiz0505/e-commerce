import React from "react";
import Header from "./components/Header";
import BannerGrid from "./components/BannerGrid";
import ProductCrousel from "./components/ProductCrousel";
import Values from "./components/Values";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Header />
      <BannerGrid />
      <ProductCrousel />
      <Values />
      <Banner />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
