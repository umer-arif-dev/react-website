

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const demoUsers = [
      { email: "omer@gmail.com", password: "123456" },
      { email: "ali@gmail.com", password: "678901" },
    ];
    localStorage.setItem("users", JSON.stringify(demoUsers));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (email.trim() === "" || password.trim() === "") {
      toast.error(" Fill all the fields");
      return;
    }

    if (!email.includes("@") || !email.includes(".com")) {
      toast.error("Invalid email address");
      return;
    }

    if (password.length < 5) {
      toast.error(" Password should be at least 5 characters");
      return;
    }


    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      localStorage.setItem("loggedInUser", JSON.stringify(found));

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
      toast.success(" Login successful!");
    } else {
      toast.error(" Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] mx-[1rem]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col shadow-lg w-[22rem] p-6 py-11"
      >
        <label className="text-sm font-medium text-gray-700 mb-[0.5rem]">
          Email
        </label>
        <input
          className="px-4 py-2 border rounded-[0.4rem] hover:scale-105 transition-all duration-300"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-sm font-medium text-gray-700 mb-[0.5rem] mt-[0.5rem]">
          Password
        </label>
        <input
          className="px-4 py-2 border rounded-[0.4rem] hover:scale-105 transition-all duration-300"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-[blue] p-[14px] text-center hover:bg-[#1f5ecc] hover:scale-105 transition-all duration-300 text-white rounded-sm mt-[1rem]"
          type="submit"
        >
          Submit
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
  );
}

export default LoginForm;
