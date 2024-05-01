import { useEffect } from "react";
import SectionBanner from "../sections/SectionBanner";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionConsultant from "../sections/SectionConsultant";

export default function Doctor() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  return (
    <>
      <SectionBreadcrumb breadcrumb="Doctor" />
      <SectionConsultant />
      <SectionBanner />
    </>
  );
}
