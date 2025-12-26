import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const { cartCount, wishCount } = useContext(ProductContext);

  const [open, setOpen] = useState(false);

  try {
    return (
      <>
        <header className="bg-[#101828] p-[1rem] flex justify-between items-center pl-[1rem] pr-[1rem]">
          <div className="flex items-center gap-[0.5rem]">
            <img src="/src/assets/wheel.png" alt="wheel" className="w-[3rem]" />
            <h1 className="text-white text-[2rem] font-bold hover:text-[#1f5ecc] hover:scale-105">
              E-Commerce
            </h1>
          </div>

          <ul className="flex-row items-center text-[1.1rem] text-white gap-[1rem] hidden sm:hidden md:flex xl:flex 2xl:flex">
            <li className="text-[blue]">
              <Link to="/">Home</Link>
            </li>
            <li className="transition-all duration-300 hover:text-[#1f5ecc] hover:scale-105">
              <Link to="/about">About</Link>
            </li>
            <li className="transition-all duration-300 hover:text-[#1f5ecc] hover:scale-105">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex flex-col gap-[1rem] pr-[0.5rem] items-center sm:flex-row md:flex-row xl:flex-row 2xl:flex-row">
            <Link to="/wishlist" className="relative">
              <i className="text-white text-[2rem] fa-solid fa-heart-pulse hover:text-[red] hover:scale-105"></i>
              <span className="absolute top-[-10px] right-[-10px] bg-red-600 text-white text-[0.8rem] px-[6px] py-[2px] rounded-full">
                {wishCount}
              </span>
            </Link>

            <Link to="/cart" className="relative">
              <i className="text-white text-[2rem] fa-solid fa-cart-shopping hover:text-[red] hover:scale-105"></i>
              <span className="absolute top-[-10px] right-[-10px] bg-red-600 text-white text-[0.8rem] px-[6px] py-[2px] rounded-full">
                {cartCount}
              </span>
            </Link>

            <Link to="/dashboard">
              <button className="text-white hover:bg-[#1f5ecc] hover:scale-105 transition-all duration-300 sm:hidden hidden md:hidden xl:block 2xl:block bg-[#193cb8] p-[0.7rem] pl-[2rem] pr-[2rem] rounded-[0.4rem]">
                Admin Dashboard
              </button>
            </Link>

            <RxHamburgerMenu
              className="text-white text-[2rem] xl:invisible 2xl:invisible cursor-pointer hover:text-[red] hover:scale-105"
              onClick={() => setOpen(!open)}
            />
          </div>
        </header>

        {open && (
          <div className="bg-[#101828] text-white flex flex-col gap-4 p-4 md:hidden">
            <Link
              to="/"
              className="hover:text-[#1f5ecc] transition"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-[#1f5ecc] transition"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#1f5ecc] transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/dashboard"
              className="hover:text-[#1f5ecc] transition"
              onClick={() => setOpen(false)}
            >
              Admin Dashboard
            </Link>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.log(error.stack);
  }
}

export default Navbar;
