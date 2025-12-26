
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function CheckForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [output, setOutput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || address.trim() === "") {
      toast.error("Please fill all the fields");
      return;
    }

    if (!email.includes("@") || !email.includes(".com")) {
      toast.error("Invalid email format");
      return;
    }

    if (address.length < 5) {
      toast.error("Address should be complete");
      return;
    }

    setOutput({ name, email, address });

    toast.success("Your order has been placed successfully!");

    setName("");
    setEmail("");
    setAddress("");

    setTimeout(() => {
      setOutput(null);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] mx-[1rem]">
      <div className="shadow-lg w-[22rem] p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Checkout</h1>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            className="transition-all duration-300 hover:scale-105 px-4 py-2 border rounded-[0.4rem]"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-sm font-medium text-gray-700 mt-4">Email</label>
          <input
            className="transition-all duration-300 hover:scale-105 px-4 py-2 border rounded-[0.4rem]"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sm font-medium text-gray-700 mt-4">Address</label>
          <textarea
            className="transition-all duration-300 hover:scale-105 px-4 py-8 w-full rounded-lg border"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>

          <label className="text-sm font-medium text-gray-700 mt-4">Payment Method</label>
          <select className="px-4 py-2 border rounded-[0.4rem] transition-all duration-300 hover:scale-105">
            <option value="cash">Cash on Delivery</option>
            <option value="jazz">JazzCash</option>
            <option value="bank">Bank Transfer</option>
          </select>

          <button
            className="text-white py-2 hover:bg-green-700 hover:scale-105 transition-all duration-300 bg-blue-600 rounded-lg w-full mt-3"
            type="submit"
          >
            Place Order
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

        {output && (
          <div className="mt-5 p-4 border-2 border-gray-700 rounded-xl bg-gray-100 shadow-md">
            <h3 className="text-lg font-bold mb-2">Order Details</h3>
            <p><strong>Name:</strong> {output.name}</p>
            <p><strong>Email:</strong> {output.email}</p>
            <p><strong>Address:</strong> {output.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckForm;
