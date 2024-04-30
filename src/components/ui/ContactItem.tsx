type ContactItemProps = {
  title: string;
  desc: string;
  icon: JSX.Element;
};
export default function ContactItem({ title, desc, icon }: ContactItemProps) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <div className="space-y-1">
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}
