// import Navbar from "../Components/Navbar";
// import Heading from "../Components/Heading";
// import InputField from "../Components/InputField";
// import Footer from "../Components/Footer";
// import Button from "../Components/Button";
// import Card from "../Components/Card";
// import "../App.css";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <div className="">
//         <Heading content="Our Products" />

//   {/* ✅ Search Bar Above Buttons */}
//   <InputField search={search} setSearch={setSearch} />

//         <div className="flex justify-center gap-[1rem]  mt-[1.5rem] flex-wrap items-center sm:flex sm:flex-row md:flex md:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row flex-col">
//           <Button content="All" size="medium" bgColor="bg-[#2b7fff] " />
//           <Button content="Electronics" size="big" bgColor="bg-[#e5e7eb] " />
//           <Button content="Clothing" size="big" bgColor="bg-[#e5e7eb] " />

//           <Button
//             content="Home & Furniure"
//             size="big"
//             bgColor="bg-[#e5e7eb] "
//           />
//           <Button
//             content="Personal & Beauty care"
//             size="big"
//             bgColor="bg-[#e5e7eb] "
//           />
//           <Button content="Toys & Game" size="big" bgColor="bg-[#e5e7eb] " />
//           <Button
//             content="Sports & Outdoor"
//             size="big"
//             bgColor="bg-[#e5e7eb] "
//           />
//         </div>

//         <Card />

//         <div className="flex justify-center gap-[1rem] mt-[1rem] mb-[5rem]">
//           <Button content="1" size="small" bgColor="bg-[#2b7fff]" />
//           <Button content="2" size="small" bgColor="bg-[#e5e7eb]" />

//           <Button content="3" size="small" bgColor="bg-[#e5e7eb]" />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

import Navbar from "../Components/Navbar";
import Heading from "../Components/Heading";
import InputField from "../Components/InputField";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Card from "../Components/Card";
import "../App.css";

function App() {
  const [search, setSearch] = useState(""); // <-- lift state here
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  return (
    <div>
      <Navbar cartCount={cartCount} wishCount={wishCount} />
      <div className="px-4">
        <Heading content="Our Products" />

        {/* ✅ Pass search and setSearch to InputField */}
        <div className="flex justify-center mt-4 mb-6">
          <InputField search={search} setSearch={setSearch} />
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-[1rem]  mt-[1.5rem] flex-wrap items-center sm:flex sm:flex-row md:flex md:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row flex-col">
          <Button content="All" size="medium" bgColor="bg-[#2b7fff]" />
          <Button content="Electronics" size="big" bgColor="bg-[#e5e7eb]" />
          <Button content="Clothing" size="big" bgColor="bg-[#e5e7eb]" />
          <Button
            content="Home & Furniture"
            size="big"
            bgColor="bg-[#e5e7eb]"
          />
          <Button
            content="Personal & Beauty care"
            size="big"
            bgColor="bg-[#e5e7eb]"
          />
          <Button content="Toys & Game" size="big" bgColor="bg-[#e5e7eb]" />
          <Button
            content="Sports & Outdoor"
            size="big"
            bgColor="bg-[#e5e7eb]"
          />
        </div>

        {/* ✅ Pass search to Card so it can filter */}
        <div className="mt-8">
          {/* <Card search={search} /> */}
          <Card
            search={search}
            setCartCount={setCartCount}
            setWishCount={setWishCount}
          />
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-[1rem] mt-[1rem] mb-[5rem] ">
          <Button content="1" size="small" bgColor="bg-[#2b7fff]" />
          <Button content="2" size="small" bgColor="bg-[#e5e7eb]" />
          <Button content="3" size="small" bgColor="bg-[#e5e7eb]" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
