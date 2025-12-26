import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (
      email.trim() === "" ||
      subject.trim() === "" ||
      textarea.trim() === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    if (!email.includes("@") || !email.includes(".com")) {
      toast.error(" Invalid email address");
      return;
    }

    if (textarea.length < 5) {
      toast.error(" Message should be at least 5 characters");
      return;
    }

    toast.success(" Thanks for contacting us! We will get back to you soon.");
    setEmail("");
    setSubject("");
    setTextarea("");
  };

  return (
    <div className="flex justify-center items-center h-[100vh] mx-[1.25rem]">
      <div className="w-[30rem] shadow-lg p-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h3>
          <p className="text-gray-700 mb-6">
            Have any questions? Feel free to reach out to us!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="py-5 flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            className="transition-all duration-300 hover:scale-105 px-4 py-2 border rounded-lg w-full"
            type="text"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sm font-medium text-gray-700 mb-1 mt-3">
            Subject
          </label>
          <input
            className="px-4 py-2 border rounded-lg w-full mb-3 transition-all duration-300 hover:scale-105"
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <label className="text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            className="px-4 py-8 w-full rounded-lg border transition-all duration-300 hover:scale-105"
            placeholder="Write your message here"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="text-white py-2 hover:bg-blue-700 hover:scale-105 transition-all duration-300 bg-blue-600 rounded-lg w-full mt-3"
          >
            Send Message
          </button>
          <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      theme="colored"
    />
        </form>
      </div>
    </div>
  );
}

export default Form;
