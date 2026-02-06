import AttentionToDetail from "@/components/AttentionToDetail";
import ContactHero from "@/components/ContactHero";
import LandingStats from "@/components/LandingStats";
import LatestWork from "@/components/LatestWork";
import ServiceDisplay from "@/components/ServiceDisplay";
import ServiceIntro from "@/components/ServiceIntro";
import ServiceList from "@/components/ServiceList";
import WhatWeDo from "@/components/WhatWeDo";

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

