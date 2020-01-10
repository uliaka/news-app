import Types from "./types";

const initialState = {
  news: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_NEWS: {
      return {
        ...state,
        news: state.news.concat([{
          ...action.payload
        }])
      };
    }
  };
}

export default todoReducer;