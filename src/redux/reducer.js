import Types from "./types";

const initialState = {
  items: [],
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
    case Types.SET_NEWS: {
      return {
        ...state,
        items: state.items.concat([...action.payload]),
      }
    }
    default:
      return state;
  }
}

export default todoReducer;
