import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/store.js';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import Login from '../src/components/login/Login';
import NewListPage from '../src/pages/newsListPage';
import PrivateRoute from '../src/components/privateRoute/privateRoute';
import TopNAvBar from '../src/components/topNavBar/NavBar';

function RouterComponent() {
  return (
    <Provider store={store}>
      <TopNAvBar/>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute path='/news' component={NewListPage}/>
        </Switch>
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterComponent />, rootElement);
serviceWorker.unregister();

