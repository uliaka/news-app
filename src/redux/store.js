import { createStore } from 'redux';
import rootReducer from './reducer.js';
import localStorage from '../localStorage.js';

const initialState = {
  user: {},
  isAuthenticated: false,
  items: [],
};
const persistedState = localStorage.loadState() ? localStorage.loadState() : initialState;
const store = createStore(
  rootReducer,
  persistedState
);
store.subscribe(() => {
  localStorage.saveState({
    user: store.getState().user,
    isAuthenticated: store.getState().isAuthenticated,
    items: store.getState().items,
  });
});
console.log('state', store.getState().items)
export default store;

