import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRouter} from "../routes";
import {SHOP_ROUTER} from "../helpers/routesConsts";

const AppRouter = () => {
  const isAuth = true
  return (
    <Switch>
      {isAuth && authRoutes.map(({path, Component}) => <Route path={path} component={Component} key={path} exact/>
      )}
      {publicRouter.map(({path, Component}) => <Route path={path} component={Component} key={path} exact/>)}
      <Redirect to={SHOP_ROUTER} />
    </Switch>
  )
}

export default AppRouter;