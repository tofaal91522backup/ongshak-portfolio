"use client";
import AnimatedHero from "./AnimatedHero";
import FeaturedWork from "./FeaturedWork";
import Testimonials from "./Testimonials";
import TrustBar from "./TrustBar";
import WhatWeDo from "./WhatWeDo";

const HomePage = () => {
  return (
    <div
      style={{
        background:
          "#05070d",
      }}
    >
      <AnimatedHero />
      <TrustBar />
     
      <Testimonials/>
      <FeaturedWork />
       <WhatWeDo />
      
    </div>
  );
};

export default HomePage;
