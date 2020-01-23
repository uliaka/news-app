import Types from "./types";
import ACTIONS from "./actions";

const initialState = {
  isAuthenticated: false,
  user: {},
  news: []
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
    case ACTIONS.Types.GET_NEWS: {
      return {
        ...state,
        news: action.payload,
      }
    }
    default:
      return state;
  }
}

export default todoReducer;
