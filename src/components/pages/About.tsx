import SectionAbout from "../sections/SectionAbout";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionConsultant from "../sections/SectionConsultant";
import SectionFeedback from "../sections/SectionFeedback";
export default function About() {
  return (
    <>
      <SectionBreadcrumb breadcrumb="About" />
      <SectionAbout />
      <SectionConsultant />
      <SectionFeedback />
    </>
  );
}
