import { useEffect } from "react";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionFeedback from "../sections/SectionFeedback";
import SectionPricing from "../sections/SectionPricing";
import AnimatePage from "./AnimatePage";
export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  return (
    <AnimatePage>
      <SectionBreadcrumb breadcrumb="Pricing" />
      <SectionPricing />
      <SectionFeedback />
    </AnimatePage>
  );
}
