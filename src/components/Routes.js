import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AboutMe, Photography, Projects, ContactMe } from './index'

export default function Routes() {
  return (
    <Route
      render={() => (
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route path='/photography' component={Photography} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={AboutMe} />
          <Route path='/contact' component={ContactMe} />
          <Redirect from='*' to='/' component={() => null} />
        </Switch>
      )}
    />
  )
}
