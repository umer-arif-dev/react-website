import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Wishlist from "../Components/Wishlist";
import { useState, useEffect } from "react";
function Wish() {
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

      <Wishlist />
      <Footer />
    </div>
  );
}

export default Wish;
