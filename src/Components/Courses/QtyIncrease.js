import React from "react";
import { qtyIncrease } from "../../redux/courses/actions";
import { useDispatch } from "react-redux";

function QtyIncrease({ id }) {
  const Dispatch = useDispatch();
  const addToCarthandler = () => Dispatch(qtyIncrease({ id }));

  return (
    <button
      onClick={addToCarthandler}
      className="focus:outline-none bg-primary text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokelinecapjoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  );
}

export default QtyIncrease;