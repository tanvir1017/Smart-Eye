import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import BannerSection2 from "../BannerSection2/BannerSection2";
import BannerSection3 from "../BannerSection3/BannerSection3";
import OurBrand from "../OurBrand/OurBrand";
import Products from "../Products/Products";
import Reviews from "../Review/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner></Banner>
      <BannerSection2 />
      <Products></Products>
      <div className="my-5">
        <Reviews />
      </div>
      <BannerSection3 />
      <div className="my-5 container">
        <OurBrand />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
