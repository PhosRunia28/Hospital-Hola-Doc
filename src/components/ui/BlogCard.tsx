import { Heart, MessageCircle } from "lucide-react";

type BlogCardProps = {
  image: string;
  title: string;
  desc: string;
  authorImg: string;
  authorName: string;
  date: Date;
  love: number;
  comment: number;
};
export default function BlogCard({
  image,
  title,
  desc,
  authorImg,
  authorName,
  date,
  love,
  comment,
}: BlogCardProps) {
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
  return (
    <div className="group flex w-full max-w-[22rem] flex-col gap-5">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="blog"
          className="w-full bg-cover bg-center transition group-hover:scale-110"
        />
      </div>
      <h4 className="cursor-pointer text-xl font-bold group-hover:text-primary">
        {title}
      </h4>
      <p className="w-full max-w-md text-sm leading-relaxed text-black/80">
        {desc}
      </p>
      <div className="flex items-center  justify-between border-y-2 py-2">
        <div className="flex items-center gap-3">
          <img
            src={authorImg}
            alt="user"
            className="rounded-full bg-cover bg-center"
          />
          <h5>{authorName}</h5>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <p className="">{formattedDate}</p>
          <div className="flex items-center gap-1 text-sm">
            <Heart />
            <p>{love}</p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <MessageCircle />
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
