import React from "react";

 function Button({ content, bgColor, size }) {
   const sizes = {
   small: "hover:bg-[#1f5ecc] hover:scale-105 transition-all duration-300 p-[0.5rem] pl-[1.25rem] pr-[1.25rem] rounded-[0.3rem]",
    medium:
      "w-[88%] sm:w-auto sm:p-[0.5rem] sm:pl-[2rem] sm:pr-[2rem] text-center text-white rounded-[0.5rem] p-[0.5rem]",
    big: "hover:bg-[#1f5ecc] hover:scale-105 transition-all duration-300 sm:w-[auto] sm:p-[0.5rem] sm:pl-[3rem] sm:pr-[3rem] sm:text-center rounded-[0.5rem] w-[88%] p-[0.5rem]",
};

   return (
    <button
      className={`${bgColor} ${sizes[size]} transition-all duration-300`}
    >
      {content}
     </button>
   );
 }

 export default Button;
