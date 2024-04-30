import blog1 from "@/img/blog1.png";
import user2 from "@/img/user2.png";
import BlogCard from "../ui/BlogCard";
export default function SectionBlog() {
  const now = new Date();

  return (
    <section className="flex flex-col gap-10 py-20 font-SourceCodePro">
      <div className="flex flex-col gap-6 text-center">
        <h3 className="text-3xl font-bold md:text-4xl">Our Recent Blogs</h3>
        <p className="mx-auto w-full max-w-lg leading-relaxed text-black/80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 font-DMSans lg:justify-start">
        <BlogCard
          image={blog1}
          title="Portable Fashion for women"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea."
          authorImg={user2}
          authorName="MarkWiens"
          date={now}
          love={15}
          comment={15}
        />
        <BlogCard
          image={blog1}
          title="Portable Fashion for women"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea."
          authorImg={user2}
          authorName="MarkWiens"
          date={now}
          love={15}
          comment={15}
        />
        <BlogCard
          image={blog1}
          title="Portable Fashion for women"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea."
          authorImg={user2}
          authorName="MarkWiens"
          date={now}
          love={15}
          comment={15}
        />
      </div>
    </section>
  );
}
