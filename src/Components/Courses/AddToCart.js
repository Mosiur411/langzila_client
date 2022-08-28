import React from "react";
import { addToCart } from "../../redux/courses/actions";
import { useDispatch } from "react-redux";

function AddToCart({ name, price, img, id, itemQty }) {
  const Dispatch = useDispatch();
  const addToCartHandler = () => {
    Dispatch(addToCart({ itemQty, name, price, img, id }));
  };
  return (
    <button
      onClick={addToCartHandler}
      className="px-4 py-2 bg-primary text-white rounded-lg font-bold"
    >
      Buy Now
    </button>
  );
}

export default AddToCart;