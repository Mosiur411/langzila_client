import React from "react";
import QtyDecrease from "./QtyDecrease";
import QtyIncrease from "./QtyIncrease";

function CartItem({ cart }) {
  const { name, price, itemQty, id } = cart;

  return (
    <div className="flex justify-between border-b-2 mb-2">
      <div className="text-lg py-2">
        <p>{name}</p>
      </div>
      <div className="text-lg py-2">
        <p>${price}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <QtyDecrease id={id} />
          <p>{itemQty}</p>
          <QtyIncrease id={id} />
                 </div>
            </div>
    </div>
  );
}

export default CartItem;