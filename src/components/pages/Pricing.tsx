import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionFeedback from "../sections/SectionFeedback";
import SectionPricing from "../sections/SectionPricing";
export default function Pricing() {
  return (
    <>
      <SectionBreadcrumb breadcrumb="Pricing" />
      <SectionPricing />
      <SectionFeedback />
    </>
  );
}
