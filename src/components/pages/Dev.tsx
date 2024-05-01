import { useEffect } from "react";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionDev from "../sections/SectionDev";
import AnimatePage from "./AnimatePage";

export default function Dev() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  return (
    <AnimatePage>
      <SectionBreadcrumb breadcrumb="Dev" />
      <SectionDev />
    </AnimatePage>
  );
}
