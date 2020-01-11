import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.isAuthenticated)
  return (
    <Route {...rest} render={(props) => {
      console.log('Component', <Component />)
      return (
        isAuthenticated === true
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
      )
    }} />
  )
}

export default PrivateRoute;

