import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";


import { useContext } from "react";
import ProductContext from "../context/ProductContext";

function Card({ search }) {
  const { setCartCount, setWishCount } = useContext(ProductContext);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products", err);
      });
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    setCartCount(cart.length);
  }, [cart]);

  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    setWishCount(wishlist.length);
  }, [wishlist]);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      const newCart = [...cart, product];
      setCart(newCart);

      toast.success("Item added to cart !");
    } else {
      toast.error("Item already exists in cart!");
    }
  };

  const handleAddToWishlist = (product) => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = storedWishlist.find((item) => item.id === product.id);
    if (exists) {
      toast.error("Item already exists in wishlist!");
      return;
    }
    const newItem = {
      id: product.id || Date.now(),
      name: product.name || product.title || "Unnamed Product",
      image: product.image || "https://via.placeholder.com/150",
      price: Number(product.price) || 0,
    };

    const updatedWishlist = [...storedWishlist, newItem];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);

    toast.success("Item added to wishlist!");
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div className="flex flex-wrap gap-[2rem] justify-center mt-[4rem] mb-[4rem] ml-[1rem] mr-[1rem]">
      {filteredProducts.length === 0 ? (
        <p className="text-center text-red-500 mt-4">No products found!</p>
      ) : (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-[30rem] sm:w-[20rem] rounded-xl shadow-lg p-[2rem] mb-[1rem] bg-white border-gray-600"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-contain"
            />
            <h1 className="text-center font-bold text-lg mt-2">
              {product.title.slice(0, 20)}
            </h1>
            <p className="text-center text-blue-600 mt-2">${product.price}</p>
            <p className="text-center text-gray-600 mt-2">
              {product.description.slice(0, 60)}
            </p>

            <div className="flex flex-col gap-[0.8rem] mt-3">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-[#00c950] p-[0.5rem] hover:scale-105 transition-all duration-300 hover:bg-green-700 pl-[2rem] pr-[2rem] text-white rounded-[0.4rem]"
              >
                Add To Cart
              </button>
              <button
                onClick={() => handleAddToWishlist(product)}
                className="bg-[#e7000b] hover:bg-red-700 hover:scale-105 transition-all duration-300 p-[0.5rem] pl-[2rem] pr-[2rem] text-white rounded-[0.4rem]"
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        ))
      )}
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
  );
}

export default Card;

