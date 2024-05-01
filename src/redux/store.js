import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

// Be sure to replace this reducer! 🙂
const cart = (state = [], action) => {
  if (action.type === "ADD_CART") {
    return [...state, action.payload];
  }
  return state;
};

const updateCart = (state = 0, action) => {
  if (action.type === "UPDATE_CART") {
    return action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    cart, // 👈 Be sure to replace this, too!
    updateCart,
  }),
  applyMiddleware(logger)
);

export default store;
