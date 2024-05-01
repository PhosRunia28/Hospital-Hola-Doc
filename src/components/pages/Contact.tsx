import { useEffect } from "react";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import SectionContact from "../sections/SectionContact";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  return (
    <>
      <SectionBreadcrumb breadcrumb="Contact" />
      <SectionContact />
    </>
  );
}
