import { Toaster } from "@/components/ui/sonner";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function Appointment() {
  type AppointmentData = {
    patient_name: string;
    phone: string;
    email_address: string;
    date_birth: Date;
    disease: string;
    appointment_date: Date;
    message: string;
  };
  const {
    formState: { errors, isSubmitting },
    register,
    reset,
    handleSubmit,
  } = useForm<AppointmentData>();
  function onSubmit(data: AppointmentData) {
    const descriptionText = `Patient: ${data.patient_name}\nContact: ${data.phone} (${data.email_address})\nDOB: ${data.date_birth.toLocaleDateString()}\nDisease: ${data.disease}\nAppointment Date: ${data.appointment_date.toLocaleString()}\nMessage: ${data.message}`;
    console.log(data);
    toast("Appointment has been created", {
      description: descriptionText,
      action: {
        label: "close",
        onClick: () => console.log("close"),
      },
    });
    reset();
  }
  return (
    <>
      <section className="flex flex-col justify-center gap-8 pb-20 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="mx-auto flex w-full max-w-lg flex-col gap-6 lg:mx-0">
          <h3 className="text-2xl font-bold sm:text-3xl">Servicing Hours</h3>
          <p className="w-full max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col font-DMSans">
            <div className="flex items-center justify-between border-b py-4">
              <h4 className="text-sm font-medium">Mon-Wed</h4>
              <p className="text-sm">08.00 am - 10.00 pm</p>
            </div>
            <div className="flex items-center justify-between border-b py-4">
              <h4 className="text-sm font-medium">Thu-Fri</h4>
              <p className="text-sm">08.00 am - 17.00 pm</p>
            </div>
            <div className="flex items-center justify-between border-b py-4">
              <h4 className="text-sm font-medium">Sun</h4>
              <p className="text-sm">10.00 am - 17.00 pm</p>
            </div>
            <div className="flex items-center justify-between border-b py-4">
              <h4 className="text-sm font-medium">Holiday</h4>
              <p className="text-sm">Closed</p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-lg flex-col gap-8 py-5 md:px-8 md:shadow-md lg:mx-0">
          <h3 className="text-center text-2xl font-medium lg:text-3xl">
            Book An Appointment
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 font-DMSans"
            noValidate
          >
            <div>
              <input
                type="text"
                className="w-full px-5 text-sm"
                placeholder="Patient Name"
                {...register("patient_name", {
                  required: "Patient Name is required",
                })}
              />
              <h3 className="text-sm text-red-500">
                {errors.patient_name?.message}
              </h3>
            </div>
            <div>
              <input
                type="text"
                className="w-full px-5 text-sm"
                placeholder="Phone"
                {...register("phone", {
                  required: "phone is required",
                })}
              />
              <h3 className="text-sm text-red-500">{errors.phone?.message}</h3>
            </div>
            <div>
              <input
                type="email"
                className="w-full px-5 text-sm"
                placeholder="Email Address"
                {...register("email_address", {
                  required: "Email Address is required",
                })}
              />
              <h3 className="text-sm text-red-500">
                {errors.email_address?.message}
              </h3>
            </div>
            <div className="relative">
              <input
                className="w-full px-5 text-sm "
                placeholder="Date of Birth"
                type="text"
                {...register("date_birth", {
                  required: "Date Of Birth is required",
                  valueAsDate: true,
                })}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <h3 className="text-sm text-red-500">
                {errors.date_birth?.message}
              </h3>
            </div>
            <div>
              <input
                type="text"
                className="w-full px-5 text-sm"
                placeholder="Disease"
                {...register("disease", {
                  required: "Disease is required",
                })}
              />
              <h3 className="text-sm text-red-500">
                {errors.disease?.message}
              </h3>
            </div>
            <div>
              <input
                type="text"
                className="w-full px-5 text-sm "
                placeholder="Appointment Date"
                {...register("appointment_date", {
                  required: "Appointment Date is required",
                  valueAsDate: true,
                })}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <h3 className="text-sm text-red-500">
                {errors.appointment_date?.message}
              </h3>
            </div>
            <div>
              <textarea
                cols={30}
                rows={10}
                placeholder="Message"
                className="w-full px-5 text-sm"
                {...register("message", {
                  required: "Message is Required",
                })}
              ></textarea>
              <h3 className="text-sm text-red-500">
                {errors.message?.message}
              </h3>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Confirm Booking
            </Button>
          </form>
        </div>
        <Toaster />
      </section>
    </>
  );
}
