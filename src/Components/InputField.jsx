

import React from "react";




function InputField({ search, setSearch }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-400 pl-[1rem] p-[0.6rem] w-[20rem] rounded-[0.4rem] mt-[2rem] hover:scale-105 transition-all duration-300"
      />
    </div>
  );
}

export default InputField;

