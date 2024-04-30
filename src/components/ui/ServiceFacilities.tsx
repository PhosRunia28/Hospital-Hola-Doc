type ServiceFacilitiesProps = {
  icon: JSX.Element;
  title: string;
  desc: string;
};
export default function ServiceFacilities({
  icon,
  title,
  desc,
}: ServiceFacilitiesProps) {
  return (
    <div className="group flex w-full max-w-[22rem] flex-col gap-4 text-left">
      {icon}
      <h4 className="text-2xl font-bold text-primary">{title}</h4>
      <p className="w-full max-w-md text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
