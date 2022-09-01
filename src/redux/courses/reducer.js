import actionTypes from "./actionTypes";


const initialState = {
    courses: [
      { id: 1, name: "Premium Bangla Language Course For Children", price: "35", category: "Bangla", img:"https://www.nestle-family.com/sites/site.prod1.nestle-family.com/files/2019-03/kids-img.jpg" },
      { id: 2, name: "Premium English Language Course For Children", price: "93", category: "English",  img:"https://3.files.edl.io/4b50/19/08/05/164119-ffe6f6a4-7efb-499b-97f5-af7ab215339b.jpg" },
      { id: 3, name: "Premium Arabic Language Course For Children", price: "69", category: "Arabic",  img:"https://www.nestle-mena.com/sites/g/files/pydnoa581/files/Healthier-kids-image.JPG" },
    ],
    carts: [],
    totalPrice: 0,
    totalItem: 0,
};
  
const reducer = (state = initialState, action) => {
  const isExisting = state.carts.find((cart) => cart.id === action.payload.id);

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (state.carts.length === 0) {
        state.carts.push(action.payload);
        state.totalItem = 1;
        state.totalPrice = parseInt(action.payload.price.replace(",", ""));
      } else {
        if (isExisting) {
          state.carts = state.carts.map((cart, index) => {
            if (cart.id === action.payload.id) {
              state.carts[index].itemQty++;
              state.totalItem++;
              state.totalPrice =
                state.totalPrice +
                parseInt(state.carts[index].price.replace(",", ""));
            }
            return { ...cart };
          });
        }

        if (!isExisting) {
          state.carts.push(action.payload);
          state.totalItem++;
          state.totalPrice =
            state.totalPrice + parseInt(action.payload.price.replace(",", ""));
        }
      }

      return { ...state };
    
    case actionTypes.REMOVE_TO_CART:
      return state;
    
    case actionTypes.QTY_INCREASE:
      state.carts.map((cart, index) => {
        if (cart.id === action.payload.id && state.carts[index].itemQty) {
          state.carts[index].itemQty++;
          state.totalItem++;
          state.totalPrice =
            state.totalPrice +
            parseInt(state.carts[index].price.replace(",", ""));
        }

        return { ...cart };
      });
      return { ...state };
    
    case actionTypes.QTY_DECREASE:
      state.carts.map((cart, index) => {
        if (cart.id === action.payload.id && state.carts[index].itemQty) {
          state.carts[index].itemQty--;
          state.totalItem--;
          state.totalPrice =
            state.totalPrice -
            parseInt(state.carts[index].price.replace(",", ""));
        }
        if (cart.id === action.payload.id && state.carts[index].itemQty === 0)
          state.carts.splice(index, 1);

        return { ...cart };
      });
      return { ...state };
        
    default:
      return state;
  }
};

export default reducer;
