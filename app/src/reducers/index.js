import { ADD_TICKER } from "../actions/index";

export const initialState = {
  stocks: [],
};

export const reducer = (state = initialState, action) => {
  console.log("reducer", action.payload);
  switch (action.type) {
    case ADD_TICKER:
      return { ...state, stocks: action.payload };
    default:
      return state;
  }
};
