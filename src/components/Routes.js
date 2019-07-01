import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { AboutMe, Pics, Projects, Contact } from './index'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const history = createHistory()

export default function Routes(props) {
  return (
    <Route
      render={({ location }) => (
        // <CSSTransition key={location.key} classNames='fade' timeout={300}>
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route path='/photography' component={Pics} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={AboutMe} />
          <Route path='/contact' component={Contact} />
          {/* <Route component={() => <div>404 Not found </div>} /> */}
          <Redirect from='*' to='/' component={() => null} />
        </Switch>
        // </CSSTransition>
      )}
    />
  )
}
