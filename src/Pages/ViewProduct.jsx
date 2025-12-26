import Dashboard from "../Components/Dashboard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CartTable from "../Components/CartTable";
import Aside from "../Components/Aside";
import { useState, useEffect } from "react";

function ViewProduct() {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    setCartCount(cart.length);
    setWishCount(wishlist.length);
  }, []);
  return (
    <>
      <Navbar cartCount={cartCount} wishCount={wishCount} />
      <div class="min-h-screen flex">
        <Aside />
        <div className="w-full">
          <CartTable />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ViewProduct;
