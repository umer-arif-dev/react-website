import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import Form from "../Components/Form";
import CheckForm from "../Components/CheckForm";
function Check() {
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
<CheckForm/>
      <Footer />
    </div>
  );
}
export default Check;
