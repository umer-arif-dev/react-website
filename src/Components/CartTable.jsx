import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
// function Cartdata({ setCartCount }) {

function Cartdata() {
  const { setCartCount } = useContext(ProductContext);

  const [cartArray, setCartArray] = useState([]);
  const [wishArray, setWishArray] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const wishData = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCartArray(cartData);
    setWishArray(wishData);
  }, []);

  useEffect(() => {
    const grandTotal = cartArray.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    setTotal(grandTotal);
  }, [cartArray]);

  const increment = (index) => {
    const updatedCart = [...cartArray];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCartArray(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.length);
  };

  const decrement = (index) => {
    const updatedCart = [...cartArray];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartArray(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartCount(updatedCart.length);
    }
  };

  const removeItem = (index) => {
    const updatedCart = [...cartArray];
    updatedCart.splice(index, 1);
    setCartArray(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCartCount(updatedCart.length);

    toast.success("Item removed from cart");
  };

  return (
    <div className="shadow-lg p-6 mx-[2rem] bg-white overflow-x-auto">
      <div className="overflow-x-auto">
        <table className="m-auto sm:w-full border border-collapse border-gray-200 mt-[3rem] overflow-x-auto">
          <thead>
            <tr className="bg-[#d1d5dc]">
              <th className="border border-gray-200 px-4 py-3">Image</th>
              <th className="border border-gray-200 px-4 py-3">Title</th>
              <th className="border border-gray-200 px-4 py-3">Price</th>
              <th className="border border-gray-200 px-4 py-3">Quantity</th>
              <th className="border border-gray-200 px-4 py-3">Sub Total</th>
              <th className="border border-gray-200 px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartArray.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-red-500 text-lg py-4 font-medium"
                >
                  Your cart is empty
                </td>
              </tr>
            ) : (
              cartArray.map((item, index) => {
                const quantity = item.quantity || 1;
                const subTotal = item.price * quantity;
                return (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-all duration-200"
                  >
                    <td className="border border-gray-200 px-4 py-3 flex justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      {(item.name || item.title || "No Name").slice(0, 25)}
                    </td>

                    <td className="border border-gray-200 px-4 py-3">
                      ${Number(item.price || 0).toFixed(2)}
                    </td>

                    <td className="border border-gray-200 px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => decrement(index)}
                          className="bg-gray-300 px-2 rounded hover:bg-gray-400 transition"
                        >
                          -
                        </button>
                        <span className="mx-1">{quantity}</span>
                        <button
                          onClick={() => increment(index)}
                          className="bg-gray-300 px-2 rounded hover:bg-gray-400 transition"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ${subTotal.toFixed(2)}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <button
                        onClick={() => removeItem(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </div>

      <div className="flex-col md:flex-row md:justify-between items-center mt-12 flex gap-[1rem]">
        <h1 className="font-bold text-2xl" id="totalAmount">
          Total: ${total.toFixed(2)}
        </h1>
        <Link to="/Check">
          <button className="hover:bg-[#1f5ecc] hover:scale-105 transition-all duration-300 text-center bg-[#155dfc] py-2 px-5 rounded-lg text-white w-full md:w-auto">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cartdata;
