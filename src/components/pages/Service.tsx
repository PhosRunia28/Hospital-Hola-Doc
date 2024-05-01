import SectionBanner from "../sections/SectionBanner";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionFacilities from "../sections/SectionFacilities";
import SectionService from "../sections/SectionService";
import SectionFeedback from "../sections/SectionFeedback";
import { useEffect } from "react";

export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  return (
    <>
      <SectionBreadcrumb breadcrumb="Service" />
      <SectionFacilities />
      <SectionService />
      <SectionBanner />
      <SectionFeedback />
    </>
  );
}
