import { useEffect } from "react";
import SectionBlog from "../sections/SectionBlog";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import AnimatePage from "./AnimatePage";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  return (
    <AnimatePage>
      <SectionBreadcrumb breadcrumb="Blog" />
      <SectionBlog />
    </AnimatePage>
  );
}
