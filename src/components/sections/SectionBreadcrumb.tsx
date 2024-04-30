import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SectionBreadcrumb({
  breadcrumb,
}: {
  breadcrumb: string;
}) {
  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-[url('src/img/banner.png')] bg-cover bg-right py-28 font-DMSans text-white">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-20 space-y-3">
        <h3 className="text-5xl font-bold uppercase tracking-[0.2em]">
          {breadcrumb}
        </h3>
        <div className="flex items-center justify-center gap-4">
          <Link to="/">Home</Link>
          <ChevronRight />
          <Link to="/service">{breadcrumb}</Link>
        </div>
      </div>
    </section>
  );
}
