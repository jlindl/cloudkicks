import React from "react";
import Hero from "./Components/hero";
import ProductShowcase from "./Components/product-showcase";
import VariantShowcase from "./Components/variant-showcase";
import DynamicShowcase from "./Components/dynamic-showcase";
import Showcase2 from "./Components/showcase2";
import Reviews from "./Components/reviews";

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <DynamicShowcase />
      <Showcase2 />
      <Reviews />
    </>
  );
};


export default Page;
