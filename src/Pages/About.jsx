import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AboutFLex from "../Components/AboutFlex";
import Footer from "../Components/Footer";
import "../App.css";
import { useState, useEffect } from "react";
function About() {
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

      <AboutFLex />
      <Footer />
    </div>
  );
}
export default About;
