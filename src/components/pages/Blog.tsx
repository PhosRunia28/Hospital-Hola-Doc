import SectionBlog from "../sections/SectionBlog";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";

export default function Blog() {
  return (
    <>
      <SectionBreadcrumb breadcrumb="Blog" />
      <SectionBlog />
    </>
  );
}
