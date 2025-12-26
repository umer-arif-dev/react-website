function View() {
  return (
    <div className="w-auto mx-[3rem] my-[2rem] h-[17rem] overflow-x-auto shadow-lg bg-white">
      <div className="overflow-x-auto shadow-lg p-6">
        <table className="sm:w-full border border-collapse border-gray-200 mt-[3rem]">
          <caption className="text-center text-2xl font-bold mb-2">
            View Product
          </caption>

          <thead>
            <tr className="bg-[#d1d5dc]">
              <th className="border border-gray-200 px-4 py-3">Image</th>
              <th className="border border-gray-200 px-4 py-3">Title</th>
              <th className="border border-gray-200 px-4 py-3">Price</th>
              <th className="border border-gray-200 px-4 py-3">Quantity</th>
              <th className="border border-gray-200 px-4 py-3">Sub Total</th>
              <th className="border border-gray-200 px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="flex justify-center items-center px-4 py-3 border border-gray-200">
                <img
                  src="/images/shirt.png"
                  alt="shirt"
                  className="w-16 h-16"
                />
              </td>
              <td className="px-4 py-2 text-center border border-gray-200">
                Mens casual Premium
              </td>
              <td className="px-4 py-2 text-center border border-gray-200">
                $22.2
              </td>
              <td className="px-4 py-2 text-center border border-gray-200">
                3
              </td>
              <td className="px-4 py-2 text-center border border-gray-200">
                $66.90
              </td>
              <td className="px-4 py-2 text-center border border-gray-200">
                <button className="bg-[#fb2c36] text-white text-center py-1 px-3 rounded">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View;
