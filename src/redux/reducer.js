import Types from "./types";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.IS_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: action.payload,
      }
    }
    case Types.USER_INFO: {
      return {
        ...state,
        user: action.payload,
      }
    }
    case Types.UPDATE_USER_INFO: {
      return {
        ...state,
        user: action.payload,
      }
    }
    default:
      return state;
  }
}

export default todoReducer;
