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
  user: {},
  isAuthenticated: false,
};
const persistedState = localStorage.loadState() ? localStorage.loadState() : initialState;
const store = createStore(
  rootReducer,
  persistedState
);
store.subscribe(() => {
  localStorage.saveState({
    news: store.getState().news,
    user: store.getState().user,
    isAuthenticated: store.getState().isAuthenticated
  });
});

export default store;

