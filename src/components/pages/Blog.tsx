import { useEffect } from "react";
import SectionBlog from "../sections/SectionBlog";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  return (
    <>
      <SectionBreadcrumb breadcrumb="Blog" />
      <SectionBlog />
    </>
  );
}
