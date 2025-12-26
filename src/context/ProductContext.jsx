

import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

 
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    setCartCount(cart.length);
    setWishCount(wishlist.length);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        cartCount,
        setCartCount,
        wishCount,
        setWishCount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
