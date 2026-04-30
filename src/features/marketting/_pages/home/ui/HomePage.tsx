import AISpotlight from "./AISpotlight";
import AnimatedHero from "./AnimatedHero";
import CTAFooter from "./CTAFooter";
import FeaturedWork from "./FeaturedWork";
import TrustBar from "./TrustBar";
import WhatWeDo from "./WhatWeDo";

const HomePage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(223.17deg, rgb(28, 24, 41) 0%, rgb(27, 24, 40) 8.61%, rgb(25, 23, 36) 17.21%, rgb(22, 21, 32) 25.82%, rgb(20, 19, 28) 34.42%, rgb(18, 18, 24) 43.03%, rgb(17, 17, 23) 51.63%)",
      }}
    >
      <AnimatedHero />
      <WhatWeDo />
      <FeaturedWork />
      <AISpotlight />
      <TrustBar />
      <CTAFooter />
    </div>
  );
};

export default HomePage;
