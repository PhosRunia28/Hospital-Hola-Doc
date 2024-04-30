import SectionBanner from "../sections/SectionBanner";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionConsultant from "../sections/SectionConsultant";

export default function Doctor() {
  return (
    <>
      <SectionBreadcrumb breadcrumb="Doctor" />
      <SectionConsultant />
      <SectionBanner />
    </>
  );
}
