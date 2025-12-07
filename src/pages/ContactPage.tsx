import { useForm } from "react-hook-form";

function ContactPage() {
  const { register, handleSubmit, formState } = useForm();

  console.log("register: ", register);
  console.log("handleSubmit: ", handleSubmit);
  console.log("formState: ", formState);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          Send us a message and we'll get back to you soon!
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-600"
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="text"
              {...register("email")}
              placeholder="your@email.com"
              className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-600"
            />
          </div>
          {/* MESSAGE FIELD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       outline-none transition resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold w-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
