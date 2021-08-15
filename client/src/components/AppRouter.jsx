import React, {useContext, } from 'react';
import {Switch, Route, } from 'react-router-dom'
import {authRoutes, publicRouter} from "../routes";
import {Context} from "../index";
import {observer} from 'mobx-react-lite';

const AppRouter = observer(() => {
  const {user} = useContext(Context)

  return (
    <Switch>
      {user.isAuth && authRoutes.map(({path, Component}) => <Route path={path} component={Component} key={path} exact/>)}
      {publicRouter.map(({path, Component}) => <Route path={path} component={Component} key={path} exact/>)}
    </Switch>
  )
})

export default AppRouter;