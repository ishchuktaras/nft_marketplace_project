import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Featured NTFs"
        paragraph="Discover the most outstanding NTFs in all topics of life."
      />
      <Filter />
      <Title
        heading="Never miss a drop"
        paragraph="Subscribe to our super-exclusive drop list and be the first to know
        about upcoming drops."
      />
      <Subscribe />
      <Title
        heading="Browse by category"
        paragraph="Explore the NTFs in most featured categories."
      />
      <Category />
    </div>
  );
};

export default Home;
