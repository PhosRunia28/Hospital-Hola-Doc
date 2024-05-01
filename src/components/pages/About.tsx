import { useEffect } from "react";
import SectionAbout from "../sections/SectionAbout";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionConsultant from "../sections/SectionConsultant";
import SectionFeedback from "../sections/SectionFeedback";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  return (
    <>
      <SectionBreadcrumb breadcrumb="About" />
      <SectionAbout />
      <SectionConsultant />
      <SectionFeedback />
    </>
  );
}
