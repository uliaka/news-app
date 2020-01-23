import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer.js';
import thunk from 'redux-thunk';
import localStorage from '../localStorage.js';

const initialState = {
  user: {},
  isAuthenticated: false,
  news: []
};
const middleware = [thunk];

const persistedState = localStorage.loadState() ? localStorage.loadState() : initialState;
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(...middleware)
);
store.subscribe(() => {
  localStorage.saveState({
    user: store.getState().user,
    isAuthenticated: store.getState().isAuthenticated,
  });
});

export default store;

