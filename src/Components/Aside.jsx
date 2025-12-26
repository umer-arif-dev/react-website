import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Aside() {
  const navigate = useNavigate();


  const handleLogout = () => {
  
    localStorage.removeItem("loggedInUser");

  
    setTimeout(() => {
      toast.success("You have been logged out!");
      navigate("/login");
    }, 1000);
  };
  return (

    <aside className="hidden sm:block sm:bg-[#101828] sm:pb-[45rem] sm:w-[30rem] md:w-[25rem] lg:w-[16rem] xl:w-[16rem] 2xl:w-[16rem]">
      <div className="flex items-center gap-[1rem] py-[1.5rem] pl-[1rem]">
        <i className="fa-solid fa-grip text-white text-[1.5rem]"></i>
        <h6 className="font-medium text-white text-2xl">Dashboard</h6>
      </div>

      <div className="flex items-center gap-[1rem] pl-[1rem]">
        <Link to="/productadd" className="flex items-center gap-[1rem]">
          <i className="fa-solid fa-bag-shopping text-white text-[1.5rem]"></i>
          <span className="font-medium text-white text-2xl hover:underline">
            Add Product
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-[1rem] py-[1rem] pl-[1rem]">
        <Link to="/viewproduct" className="flex items-center gap-[1rem]">
          <i className="fa-solid fa-eye text-white text-[1.5rem]"></i>
          <span className="font-medium text-white text-2xl hover:underline">
            View Product
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-[1rem] pl-[1rem]">
        <i className="fa-solid fa-arrow-right-from-bracket text-white text-[1.5rem]"></i>
        <button
          onClick={handleLogout}
          className="font-medium text-white transition-all duration-300 hover:text-[#1f5ecc] hover:scale-105"
        >
          Logout
        </button>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </aside>
  );
}
export default Aside;
