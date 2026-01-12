import React from "react";
import Hero from "./Components/hero";
import Showcase from "./Components/showcase";
import Showcase2 from "./Components/showcase2";
import Reviews from "./Components/reviews";

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <Showcase />
      <Showcase2 />
      <Reviews />
    </>
  );
};

export default Page;
