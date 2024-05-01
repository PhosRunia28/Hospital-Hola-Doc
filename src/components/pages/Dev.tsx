import { useEffect } from "react";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionDev from "../sections/SectionDev";

export default function Dev() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  return (
    <>
      <SectionBreadcrumb breadcrumb="Dev" />
      <SectionDev />
    </>
  );
}
