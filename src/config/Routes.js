import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';  //Redirect
import Home from '../components/Home';
import TaskList from '../components/TaskList';
import PageNotFound from '../components/PageNotFound';

const PrivateRoute = ({ component: Component, isAuthenticated: isAuth, ...rest }) => (
  <Route {...rest} render={props => (
    (isAuth === true) ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>      
)

const Routes = (props) => (
    <Switch>
      {(props.isAuthenticated === false) ?
        (<Route exact path='/'  component={Home}/>) :
        (<Route exact path='/'  component={TaskList} isAuthenticated={props.isAuthenticated}/>)
      } 
      <PrivateRoute exact path='/tasks-list' component={TaskList} isAuthenticated={props.isAuthenticated}/>
      <Route path="*" component={PageNotFound}/>
    </Switch>
)

export default Routes;