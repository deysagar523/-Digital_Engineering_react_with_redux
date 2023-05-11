import { ADD_CAKE, ORDER_CAKE } from "../Actions/CakeAction";

const initialCakeState = {
  totalNoOfCakes: 10,
  priceForCake: 250,
  totalAmount: 0,
  errorMessage: null,
};
export const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case ADD_CAKE:
      return {
        ...state,
        totalNoOfCakes: state.totalNoOfCakes + 1,
        errorMessage: null,
      };
    case ORDER_CAKE:
      if (state.totalNoOfCakes === 0) {
        // check if total number of cakes is 0
        return {
          ...state,
          errorMessage: "No cakes available", // set error message
        };
      }
      else if (state.totalNoOfCakes === 1) {
        // check if total number of cakes is 0
        return {
          ...state,
          errorMessage: "No cakes available", // set error message
          totalNoOfCakes: state.totalNoOfCakes - 1,
          totalAmount: state.totalAmount + state.priceForCake,
        };
      } else {
        return {
          ...state,
          totalNoOfCakes: state.totalNoOfCakes - 1,
          totalAmount: state.totalAmount + state.priceForCake,
          errorMessage: null, // clear error message
        };
      }
    default:
      return state;
  }
};
