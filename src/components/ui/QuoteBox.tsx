import user1 from "@/img/user1.png";
import { Quote } from "lucide-react";

export default function QuoteBox() {
  return (
    <div className="absolute bottom-2 left-1/2 mx-auto w-full max-w-sm -translate-x-1/2 rounded-md border bg-white px-5 py-4 font-SourceCodePro shadow-lg md:max-w-xs lg:-left-36 lg:bottom-auto lg:top-32 lg:translate-x-0">
      <Quote className="absolute right-7 top-6 h-7 w-7" />
      <div className="mb-4 flex items-center gap-3">
        <img
          src={user1}
          alt="user1"
          className="w-full max-w-8 rounded-full bg-cover bg-center"
        />
        <h4 className="font-medium">Jane Doe</h4>
      </div>
      <p className="text-xs leading-relaxed">
        “The doctor appointment app has been great for me. Scheduling
        appointments and getting medication reminders is much easier, and I love
        the option for virtual consultations. I'd recommend this app to others.”
      </p>
    </div>
  );
}
