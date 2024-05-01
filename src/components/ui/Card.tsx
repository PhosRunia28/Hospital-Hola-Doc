type CardProps = {
  image: string;
  name: string;
  specialist: string;
  desc?: string;
};
export default function Card({ image, name, specialist, desc }: CardProps) {
  return (
    <div className="w-full max-w-[16rem] space-y-5 px-5 py-4 shadow-lg transition hover:bg-secondary">
      <img
        src={image}
        alt=""
        className="mx-auto h-[18rem] w-[18rem] bg-cover bg-center"
      />
      <div>
        <h4 className="text-2xl font-medium">{name}</h4>
        <p className="text-sm uppercase tracking-wide text-primary">
          {specialist}
        </p>
      </div>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
