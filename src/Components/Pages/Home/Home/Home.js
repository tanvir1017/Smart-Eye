import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import BannerSection2 from "../BannerSection2/BannerSection2";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerSection2 />
      <Products></Products>
      <Footer />
    </div>
  );
};

export default Home;
