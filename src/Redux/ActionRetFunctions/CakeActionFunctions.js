import { ADD_CAKE, ORDER_CAKE } from "../Actions/CakeAction";

export const orderCake = () => {
  return {
    type: ORDER_CAKE,
  };
};

export const addCake = () => {
  return {
    type: ADD_CAKE,
  };
};
