import React from 'react'
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { LastLocationProvider } from 'react-router-last-location'
import PublicRoute from 'routes/PublicRoute'
import Home from 'routes/Home'

export const history = createBrowserHistory()

const Routes = () => (
  <Router history={ history }>
    <LastLocationProvider>
      <Switch>
        <PublicRoute path='/' component={Home}/>
        <PublicRoute component={NotFound}/>
      </Switch>
    </LastLocationProvider>
  </Router>
)

export default Routes
