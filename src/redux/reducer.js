import Types from "./types";

const initialState = {
  news: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.IS_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: action.payload,
      }
    }
    default:
      return state;
  }
}

export default todoReducer;