import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductContext from "../context/ProductContext";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  const { setWishCount } = useContext(ProductContext);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (index) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    setWishCount(updatedWishlist.length);

    toast.success("Item removed from wishlist");
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-[5rem] ">
      {wishlist.length === 0 ? (
        <div className="text-center mt-39  mb-[10rem]  ">
          <h2 className="text-2xl font-bold  text-gray-600 mb-4">
            No items in Wishlist
          </h2>
          <Link
            to="/"
            className="bg-[#155dfc] text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="flex flex-wrap gap-[4rem] sm:gap-[1.4rem] justify-center mt-[4rem] mb-[4rem] ml-[1rem] mr-[1rem]">
          {wishlist.map((item, index) => (
            <div
              key={index}
              className="w-[20rem] rounded-xl shadow-lg p-[1.5rem] bg-white border-gray-600"
            >
              <img
                src={item.image}
                alt={item.name || "wishlist-item"}
                className="w-full h-40 object-contain"
              />
              <h1 className="text-center text-xl font-bold mt-2">
                {item.name ? item.name.slice(0, 25) : "Unnamed Product"}
              </h1>
              <p className="text-center text-[blue] mt-1">
                ${item.price || "N/A"}
              </p>

              <div className="flex flex-col gap-[0.8rem] mt-3">
                <button
                  onClick={() => removeFromWishlist(index)}
                  className="bg-[#e7000b] hover:bg-green-700 hover:scale-105 transition-all duration-300 p-[0.5rem] text-white rounded-[0.4rem]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Wishlist;
