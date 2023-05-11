import { legacy_createStore, combineReducers } from "redux";
import { cakeReducer } from "./Reducers/CakeReducer";
import { IcecreamReducer } from "./Reducers/IcecreamReducer";
const combinedReducers = combineReducers({
  cake: cakeReducer,
  icecream: IcecreamReducer,
});
export const store = legacy_createStore(combinedReducers);
