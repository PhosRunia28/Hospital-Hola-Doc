import { Button } from "./button";
type PricingItemProps = {
  tier: string;
  price: string;
  offers: string[];
};
export default function PricingItem({ tier, price, offers }: PricingItemProps) {
  return (
    <div className="group relative flex w-full max-w-[16rem] flex-col gap-7 border border-black pb-10 pt-5 text-center transition hover:border-primary/50">
      <h3 className="text-xl font-medium uppercase tracking-wider group-hover:text-primary">
        {tier}
      </h3>
      <h4 className="text-3xl group-hover:text-primary">
        ${price} <span className="text-sm">/ session</span>
      </h4>
      <ul className="">
        {offers.map((offer: string) => {
          return (
            <li
              key={offer}
              className="even:text-text-white py-2 odd:bg-slate-200"
            >
              {offer}
            </li>
          );
        })}
      </ul>
      <Button
        type="button"
        size="lg"
        className="absolute -bottom-5 left-1/2 mx-auto max-w-fit -translate-x-1/2 rounded-full border hover:border-black hover:bg-white hover:text-primary"
      >
        Get Offer
      </Button>
    </div>
  );
}
