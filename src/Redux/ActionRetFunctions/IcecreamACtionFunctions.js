import { ADD_ICECREAM, ORDER_ICECREAM } from "../Actions/IcecreamActions";

export const orderIcecream = () => {
  return {
    type: ORDER_ICECREAM,
  };
};

export const addIcecream = () => {
  return {
    type: ADD_ICECREAM,
  };
};
