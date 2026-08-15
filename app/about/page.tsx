import AboutHero from "@/components/about/hero";
import QualityCommitment from "@/components/about/quality-commitment";
import QualitySpotlight from "@/components/about/quality-spotlight";
import WhatWeBelieve from "@/components/about/what-we-believe";
import WhoWeAre from "@/components/about/who-we-are";
import VisionMission from "@/components/home/vision-mission";

const page = () => {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <WhoWeAre />
      <QualitySpotlight />
      <QualityCommitment />
      <WhatWeBelieve />
    </>
  );
};

export default page;
