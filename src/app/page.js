import BlogCarousel from "@/components/BlogCarousel";
import FAQSection from "@/components/FAQSection";
import HealthCategoriesSection from "@/components/HealthCategoriesSection";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import InteractiveVideoSection from "@/components/InteractiveVideoSection";
import LifestyleTabs from "@/components/LifestyleTabs";
import ScrollableRingsSection from "@/components/ScrollableRingsSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import StickyFeaturesSection from "@/components/StickyFeaturesSection";
import VideoCarousel from "@/components/VideoCarousel";
import React from "react";

function page() {
  return (
    <>
      <VideoCarousel />
      <HorizontalScrollSection />
      <StickyFeaturesSection />
      <LifestyleTabs />
      <HealthCategoriesSection />
      <InteractiveVideoSection />
      <ScrollableRingsSection />
      <SpecificationsSection />
      <BlogCarousel />
      <FAQSection />
    </>
  );
}

export default page;
