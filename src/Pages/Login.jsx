import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm";
import { useState, useEffect } from "react";
function Login() {
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

      <LoginForm />

      <Footer />
    </div>
  );
}
export default Login;
