import actionTypes from "./actionTypes";

export const addToCart = (value) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: value,
  };
};

export const removeToCart = (value) => {
  return {
    type: actionTypes.REMOVE_TO_CART,
    payload: value,
  };
};

export const qtyIncrease = (value) => {
  return {
    type: actionTypes.QTY_INCREASE,
    payload: value,
  };
};

export const qtyDecrease = (value) => {
  return {
    type: actionTypes.QTY_DECREASE,
    payload: value,
  };
};

