import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cn from "classnames";
import { Star } from "lucide-react";
export default function SectionFeedback() {
  const testimonials = [
    {
      feedback:
        "My experience at Hospital Hola Doc was exceptional. The medical team was highly skilled and caring, and the facilities were state-of-the-art.",
      star: 3,
      name: "Samantha Roberts",
    },
    {
      feedback:
        "I was impressed by the professionalism and dedication of the staff at Hospital Hola Doc. They provided me with personalized care and made me feel comfortable throughout my treatment.",
      star: 5,
      name: "Alexandra Smith",
    },
    {
      feedback:
        "Hospital Hola Doc is a beacon of excellence in healthcare. From the moment I arrived until my discharge, I felt supported and well-cared for.",
      star: 4,
      name: "Daniel Taylor",
    },
    {
      feedback:
        "I want to express my gratitude to Hospital Hola Doc for the exceptional care I received. The doctors and nurses went above and beyond to ensure my recovery.",
      star: 4,
      name: "Sophia Martinez",
    },
    {
      feedback:
        "Choosing Hospital Hola Doc was the best decision I made for my health. The staff's expertise and kindness made my hospital stay as comfortable as possible.",
      star: 5,
      name: "William Anderson",
    },
  ];
  return (
    <section className="space-y-10 pb-24 pt-10">
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-3xl font-bold lg:text-4xl">
          Our Client's Feedback
        </h3>
        <p className="">Who are in extremely love with eco friendly system..</p>
      </div>
      <div className="mx-auto w-full max-w-[70%] md:max-w-[85%]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="">
            {testimonials.map((testimonial) => {
              return (
                <CarouselItem
                  key={testimonial.name}
                  className="h-full rounded-md border px-6 py-2 shadow-md md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col gap-4">
                    <p className="w-full max-w-sm leading-relaxed text-black/80">
                      {testimonial.feedback}
                    </p>
                    <div className="mt-auto gap-4 text-center">
                      <div className="flex items-center justify-center gap-3">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <Star
                              key={index}
                              className={cn({
                                "text-orange-500": index < testimonial.star,
                                "text-gray-500": index >= testimonial.star,
                              })}
                            />
                          ))}
                      </div>
                      <h4 className="mt-auto text-xl font-bold">
                        {testimonial.name}
                      </h4>
                      <small className="uppercase -tracking-widest">
                        Patients
                      </small>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
