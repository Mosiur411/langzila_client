import React from "react";
function TotalPrice({ totalPrice }) {
  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="text-xl font-semibold flex justify-between">
        <h1 className="text-xl">Total Price</h1>
        <h1 className="text-xl"> ${totalPrice}</h1>
      </div>
    </div>
  );
}

export default TotalPrice;
