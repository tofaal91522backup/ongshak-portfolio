import AISpotlight from "./AISpotlight";
import AnimatedHero from "./AnimatedHero";
import CredibilityStrip from "./CredibilityStrip";
import CTAFooter from "./CTAFooter";
import FeaturedWork from "./FeaturedWork";
import TrustBar from "./TrustBar";
import WhatWeDo from "./WhatWeDo";

const HomePage = () => {
  return (
    <div>
      <AnimatedHero />
      <CredibilityStrip />
      <WhatWeDo />
      <FeaturedWork />
      <AISpotlight />
      <TrustBar />
      <CTAFooter />
    </div>
  );
};

export default HomePage;
