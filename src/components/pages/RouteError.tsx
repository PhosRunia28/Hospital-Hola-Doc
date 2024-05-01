import { useEffect } from "react";

export default function RouteError() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  return (
    <>
      <section className="py-32 text-3xl font-bold">Route Error</section>
    </>
  );
}
