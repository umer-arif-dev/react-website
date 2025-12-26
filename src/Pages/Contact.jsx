import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
function Contact() {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setwishCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    setCartCount(cart.length);
    setwishCount(wishlist.length);
  }, []);

  return (
    <div>
      <Navbar cartCount={cartCount} wishCount={wishCount} />
      <Form />
      <Footer />
    </div>
  );
}
export default Contact;
