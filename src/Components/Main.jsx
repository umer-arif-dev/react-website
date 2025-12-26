import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      price.trim() === "" ||
      description.trim() === "" ||
      category.trim() === "" ||
      !image
    ) {

      toast.error("Please fill all fields and select an image", {
        icon: "",
        style: {
          background: "linear-gradient(to right, #ef4444, #b91c1c)",
          color: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
      });
      return;
    }

    if (isNaN(price)) {

      toast.error("Price must be a number!", {
        icon: "",
        style: {
          background: "linear-gradient(to right, #ef4444, #b91c1c)",
          color: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
      });
      return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    const newProduct = { title, price, description, category, image: preview };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    toast.success("Product Added Successfully!", {
      icon: "✅",
      style: {
        background: "linear-gradient(to right, #22c55e, #16a34a)",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      },
    });

    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage(null);
    setPreview(null);
  };

  return (
    <main className="flex-1 flex justify-center items-center p-6">
      <div className="flex flex-col lg:flex-row gap-8 shadow-lg p-6 rounded-lg bg-white">
        <div className="flex justify-center">
          <div className="w-48 h-88 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 overflow-hidden rounded-md">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              "No Image"
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm
            text-gray-800 placeholder-gray-400 shadow-sm
            focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500
            transition-all duration-300 ease-in-out hover:shadow-md hover:border-blue-400"
          />

          <input
            type="text"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm
            text-gray-800 placeholder-gray-400 shadow-sm
            focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500
            transition-all duration-300 ease-in-out hover:shadow-md hover:border-blue-400"
          />

          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm
            text-gray-800 placeholder-gray-400 shadow-sm
            focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500
            transition-all duration-300 ease-in-out hover:shadow-md hover:border-blue-400"
          ></textarea>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm
            text-gray-800 placeholder-gray-400 shadow-sm
            focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500
            transition-all duration-300 ease-in-out hover:shadow-md hover:border-blue-400"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Books">Books</option>
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm
            text-gray-800 placeholder-gray-400 shadow-sm
            focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500
            transition-all duration-300 ease-in-out hover:shadow-md hover:border-blue-400"
          />

          <button
            type="submit"
            className="relative w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-xl
             shadow-md hover:shadow-lg hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700
             transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
             focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Add Product
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        toastClassName={() =>
          "relative flex items-center justify-between px-5 py-3 rounded-xl shadow-md bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold tracking-wide text-sm border border-white/20 animate-slideIn"
        }
        bodyClassName={() => "flex items-center gap-2"}
        progressClassName="bg-white/80"
      />
    </main>
  );
}

export default Main;
