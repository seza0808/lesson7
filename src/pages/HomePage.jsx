import React from "react";
import NewArrivals from "../homePage/NewArrivals";
import TopSelling from "../homePage/TopSellng";
import HeaderHomePage from "../homePage/HeaderHomePage";
import BrowseDress from "../homePage/BrowseDress";

const HomePage = () => {
  return (
    <div>
      <HeaderHomePage />
      <NewArrivals />
      <TopSelling />
      <BrowseDress />
    </div>
  );
};

export default HomePage;
