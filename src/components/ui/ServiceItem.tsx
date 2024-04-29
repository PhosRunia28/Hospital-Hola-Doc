type ServiceItemProps = {
  image: string;
  title: string;
  description: string;
};
export default function ServiceItem({
  image,
  title,
  description,
}: ServiceItemProps) {
  return (
    <div className="group flex flex-col gap-5 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full bg-cover bg-center transition group-hover:scale-110"
      />
      <h4 className="cursor-pointer text-lg font-bold group-hover:text-primary">
        {title}
      </h4>
      <p className="w-full max-w-md leading-relaxed md:max-w-xs">
        {description}
      </p>
    </div>
  );
}
