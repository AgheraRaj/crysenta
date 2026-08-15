import AboutFertilizer from "@/components/home/about-fertilizer";
import FAQ from "@/components/home/faq";
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
      <FAQ />
    </>
  );
};

export default page;
