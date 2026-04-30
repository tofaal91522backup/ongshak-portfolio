import HoldMusicController from "@/components/HoldMusicController";
import AISpotlight from "./AISpotlight";
import CredibilityStrip from "./CredibilityStrip";
import CTAFooter from "./CTAFooter";
import FeaturedWork from "./FeaturedWork";
import GTA6Hero from "./GTA6Hero";
import TrustBar from "./TrustBar";
import WhatWeDo from "./WhatWeDo";
import AnimatedMenu from "./AnimatedMenu";

const HomePage = () => {
  return (
    <AnimatedMenu>
      <GTA6Hero />
      <HoldMusicController />
      {/* <CredibilityStrip />
      <WhatWeDo />
      <FeaturedWork />
      <AISpotlight />
      <TrustBar />
      <CTAFooter /> */}
    </AnimatedMenu>
  );
};

export default HomePage;
