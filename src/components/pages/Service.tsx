import SectionBanner from "../sections/SectionBanner";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionFacilities from "../sections/SectionFacilities";
import SectionService from "../sections/SectionService";
import SectionFeedback from "../sections/SectionFeedback";

export default function Service() {
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
