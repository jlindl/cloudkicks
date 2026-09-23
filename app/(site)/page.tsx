import React from "react";
import Hero from "../Components/hero";
import DynamicShowcase from "../Components/dynamic-showcase";
import Showcase2 from "../Components/showcase2";
import Reviews from "../Components/reviews";
import SoldOutPopup from "../Components/sold-out-popup";

const Page: React.FC = () => {
  return (
    <>
      <SoldOutPopup />
      <Hero />
      <DynamicShowcase />
      <Showcase2 />
      <Reviews />
    </>
  );
};


export default Page;
