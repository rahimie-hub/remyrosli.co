import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Gallery from './components/Gallery';
import MainPage from './components/MainPage';

export const RouteList = [
  {
    name: '',
    path: '/',
    component:MainPage, 
    main: true
  },
  {
    name: 'Gallery',
    path: '/gallery',
    component: Gallery, 
    main:false
  },
]

const Routes = () => {
  return (
    // <Router>
    <Switch>
      {RouteList.map((route, i) => (
        <Route path={route.path} component={route.component} key={i} exact />
      ))}
    </Switch>
    // </Router>

  )
}

export default Routes;