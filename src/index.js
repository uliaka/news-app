import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/store.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import LoginPage from '../src/pages/LoginPage';
import NewListPage from '../src/pages/NewsListPage';
import PrivateRoute from '../src/components/privateRoute/PrivateRoute';
import TopNavBar from '../src/components/topNavBar/NavBar';
import ProfileContainer from '../src/components/profile/ProfileContainer';

function RouterComponent() {
  return (
    <Provider store={store}>
      <Router>
        <TopNavBar />
        <Switch>
          <PrivateRoute exact path='/' component={NewListPage} />
          <Route exact path='/login' component={LoginPage} />
          <PrivateRoute path='/news' component={NewListPage} />
          <PrivateRoute path='/profile' component={ProfileContainer} />
        </Switch>
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterComponent />, rootElement);
serviceWorker.unregister();

