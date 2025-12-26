import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const navigate = useNavigate();


  const handleLogout = () => {
 
    localStorage.removeItem("loggedInUser");


    toast.error("You have been logged out!");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  return (
    <>
      <div class="border-1 border-gray-600"></div>

      <div class="flex items-center">
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

        <div class="flex flex-col  items-stretch m-auto sm:flex-row gap-[2rem] ">
          <div class="w-full bg-[#FFFFFF] shadow-lg text-center p-6">
            <h1 class="text-lg  font-semibold"> Manage Product</h1>
            <p class="text-gray-600 mt-2">
              {" "}
              View,edit,and delete products in your invevtory.
            </p>
          </div>

          <div class="w-full bg-[#FFFFFF] shadow-lg text-center p-6">
            <h1 class="text-lg  font-semibold"> Add new ProductProduct</h1>
            <p class="text-gray-600 mt-2">
              {" "}
              Add new products to your invevtory with details.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
