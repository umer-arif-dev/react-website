import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
function DashboardPage() {
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
      <Dashboard />
      <Footer margin="mt-[0rem]" />
    </div>
  );
}
export default DashboardPage;
