import React from "react";
import Banner from "../Home/Banner";
import FeaturedMovie from "../../Components/FeaturedMovie";
import Faq from "../Home/Faq";
import About from "../Home/About";

const Home = () => {
 


  return (
    <div>
      <Banner></Banner>
      <FeaturedMovie></FeaturedMovie>
      <About></About>
      <Faq></Faq>
    </div>
  );
};

export default Home;
