import ContactHero from "@/components/ContactHero";
import ServiceIntro from "./_components/ServiceIntro";
import WhatWeDo from "./_components/WhatWeDo";
import AttentionToDetail from "./_components/AttentionToDetail";
import ServiceDisplay from "./_components/ServiceDisplay";
import LandingStats from "./_components/LandingStats";
import ServiceList from "./_components/ServiceList";
import LatestWork from "./_components/LatestWork";

export default function ServicesPage() {
  return (
    <>
      <ServiceIntro />
      <WhatWeDo />
      <AttentionToDetail />
      <ServiceDisplay />
      <LandingStats />
      <ServiceList />
      <LatestWork />
      <ContactHero />
    </>
  )
}

