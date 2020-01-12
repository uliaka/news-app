import { createStore } from 'redux';
import rootReducer from './reducer.js';
import localStorage from '../localStorage.js';

const initialState = {
  news: [
    {
      id: 1,
      title: 'First item',
    },
  ],
  isAuthenticated: false,
};

const persistedState = localStorage.loadState() ? localStorage.loadState() : initialState;
const store = createStore(
  rootReducer,
  persistedState
);
store.subscribe(() => {
  localStorage.saveState({
    items: store.getState().items,
    isAuthenticated: store.getState().isAuthenticated
  });
});

export default store;

