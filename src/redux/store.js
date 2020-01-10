import { createStore } from 'redux';
import rootReducer from './reducer.js';


const initialState = {
  news: [
    {
    id: 1,
    title: 'First item',
  },
  {
    id: 2,
    title: 'Second item',
  },
],
activeItem: null,
};

const store = createStore(
  rootReducer,
  initialState
);

export default store;

