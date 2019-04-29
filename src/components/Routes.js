import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { AboutMe, Pics, Projs, Contact } from './index'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

const history = createHistory()

export default function Routes(props) {
  return (
    <Route
      render={({ location }) => (
        // <CSSTransition key={location.key} classNames='fade' timeout={300}>
        <Switch>
          <Route exact path='/' component={() => null} />
          <Route path='/pics' component={Pics} />
          <Route path='/projs' component={Projs} />
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
