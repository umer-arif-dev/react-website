import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/Dashboard";
import ViewProduct from "./Pages/ViewProduct";
import Productadd from "./Pages/Productadd";
import Check from "./Pages/Check";
import LoginForm from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { ProductProvider } from "./context/ProductContext";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
  },

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/wishlist",
    element: (
      <ProtectedRoute>
        <Wishlist />
      </ProtectedRoute>
    ),
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/viewproduct",
    element: (
      <ProtectedRoute>
        <ViewProduct />
      </ProtectedRoute>
    ),
  },
  {
    path: "/productadd",
    element: (
      <ProtectedRoute>
        <Productadd />
      </ProtectedRoute>
    ),
  },
  {
    path: "/check",
    element: (
      <ProtectedRoute>
        <Check />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
<ProductProvider>


      <RouterProvider router={router} />
      </ProductProvider>
  
  );
}
export default App;
