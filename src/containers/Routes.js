import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import { PageOne } from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';

export const RouteList = [
  {
    name: '',
    path: '/',
    component: Dashboard, 
  },
  {
      name: 'page1',
      path: '/1',
      component: Dashboard, 
  },
  {
      name: 'page2',
      path: '/2',
      component: PageOne, 
  },
  {
    name: 'page3',
    path: '/3',
    component: PageTwo, 
  },
]

const Routes = () => {
  return (
    <Switch>
      {RouteList.map((route, i) => (
        <Route path={route.path} component={route.component} key={i} exact />
      ))}
    </Switch>
  )
}

export default Routes;