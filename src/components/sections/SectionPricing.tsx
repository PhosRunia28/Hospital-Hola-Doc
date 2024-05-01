import PricingItem from "../ui/PricingItem";

export default function SectionPricing() {
  const offers = [
    "Diagnostic Services",
    "Professional Consultation",
    "Tooth Implants",
    "Surgical Extractions",
    "Teeth Whitening",
    "Orthodontic Treatment",
    "Periodontal Therapy",
    "Pediatric Dentistry",
    "Dental Crowns and Bridges",
  ];
  return (
    <section className="flex flex-wrap justify-center gap-9 py-24 font-SourceCodePro">
      <PricingItem tier="basic" price="24.50" offers={offers.slice(0, 5)} />
      <PricingItem tier="standard" price="34.50" offers={offers.slice(0, 7)} />
      <PricingItem tier="premium" price="54.50" offers={offers.slice(0, 8)} />
      <PricingItem tier="platinum" price="89.50" offers={offers} />
    </section>
  );
}
