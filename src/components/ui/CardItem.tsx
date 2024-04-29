type CardItemProps = {
  title: string;
  desc: string;
  icon: JSX.Element;
};
export default function CardItem({ title, desc, icon }: CardItemProps) {
  return (
    <div className="flex gap-5">
      {icon}
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="w-full max-w-[16rem] text-sm leading-relaxed text-gray-300">
          {desc}
        </p>
      </div>
    </div>
  );
}
