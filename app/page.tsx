import AboutFertilizer from "@/components/home/about-fertilizer";
import BuildTrust from "@/components/home/build-trust";
import Hero from "@/components/home/hero";
import VisionMission from "@/components/home/vision-mission";
import WhatWeOffer from "@/components/home/what-we-offer";
import WhyChooseUs from "@/components/home/why-choose-us";

const page = () => {
  return (
    <>
      <Hero />
      <VisionMission />
      <WhatWeOffer />
      <AboutFertilizer />
      <WhyChooseUs />
      <BuildTrust />
    </>
  );
};

export default page;
