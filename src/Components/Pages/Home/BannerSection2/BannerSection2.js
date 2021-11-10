import React from "react";
import { Link } from "react-router-dom";
import "../Home/Local.css";

const BannerSection2 = () => {
  return (
    <div className=" backgroundimg">
      <div className="row row-cols-md-2 ">
        <div className="col"></div>
        <div className="col background-banner">
          <div className="banner-heading">
            {" "}
            <h2>Visit A World's Best Store</h2>
            <p>
              Ateration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going.
            </p>
            <Link to="/shop">
              <button className="loginbtn shadow-lg">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection2;
