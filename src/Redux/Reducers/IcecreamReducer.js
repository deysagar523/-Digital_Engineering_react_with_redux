import { ADD_ICECREAM, ORDER_ICECREAM } from "../Actions/IcecreamActions";

const iniIcecreamState = {
  totalNoOfIcecreams: 20,
  priceForIcecream: 25,
  totalAmount: 0,
  errorMessage: null,
};
export const IcecreamReducer = (state = iniIcecreamState, action) => {
  switch (action.type) {
    case ORDER_ICECREAM:
      if (state.totalNoOfIcecreams === 0) {
        // check if total number of cakes is 0
        return {
          ...state,
          errorMessage: "No icecreams available", // set error message
        };
      } else if (state.totalNoOfIcecreams === 1) {
        // check if total number of cakes is 0
        return {
          ...state,
          errorMessage: "No icecreams available", // set error message
          totalNoOfIcecreams: state.totalNoOfIcecreams - 1,
          totalAmount: state.totalAmount + state.priceForIcecream,
        };
      } else {
        return {
          ...state,
          totalNoOfIcecreams: state.totalNoOfIcecreams - 1,
          totalAmount: state.totalAmount + state.priceForIcecream,
          errorMessage: null,
        };
      }

    case ADD_ICECREAM:
      return {
        ...state,
        totalNoOfIcecreams: state.totalNoOfIcecreams + 1,
        errorMessage: null,
      };
    default:
      return state;
  }
};
