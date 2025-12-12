import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

function ContactPage() {
  const { register, handleSubmit, formState, reset } =
    useForm<ContactFormData>();
  const { errors } = formState;

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log("Form submitted with data: ", data);
    setIsSuccess(true);
    reset();

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          Send us a message and we'll get back to you soon!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name should be filled!" })}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-600"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email",
                },
              })}
              placeholder="your@email.com"
              className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-600"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* MESSAGE FIELD */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       outline-none transition resize-none"
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold w-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {isSuccess && (
            <div>
              <p className="bg-green-100 border border-green-400 text-green-700 rounded-lg px-4 py-3 mb-1">
                ✅ Success!
              </p>
              <p className="text-sm text-gray-700">
                Your message has been sent successfully.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
