



import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(storedCart);
    setWishlist(storedWishlist);
    setCartCount(storedCart.length);
    setWishCount(storedWishlist.length);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.length);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setWishCount(wishlist.length);
  }, [wishlist]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        cart,
        wishlist,
        cartCount,
        wishCount,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
export default ProductProvider; 
