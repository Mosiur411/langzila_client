import React from "react";

function TotalItems({ totalItem }) {
  return (
    <div className=" bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="text-xl font-semibold flex justify-between">
        <h1 className="text-xl">Total Item</h1>
        <h1 className="text-xl">{totalItem}</h1>
      </div>
    </div>
  );
}

export default TotalItems;