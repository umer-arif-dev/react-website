

import { useState, useEffect } from "react"; 
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cartdata from "../Components/CartTable";
import { Link } from "react-router-dom";


function Cart() {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);


  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    setCartCount(cart.length);
    setWishCount(wishlist.length);
  }, []);
  return (
    <div>
      <Navbar cartCount={cartCount} wishCount={wishCount} />
      <Cartdata />

      <div className="flex justify-center mt-[3rem]">
        <Link to="/">
          <button
            className=" mb-[7rem] hover:bg-[#1f5ecc] hover:scale-105 transition-all duration-300 text-center bg-[#155dfc] py-2 px-5 rounded-lg t
        text-white w-full md:w-auto"
          >
            Home
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
