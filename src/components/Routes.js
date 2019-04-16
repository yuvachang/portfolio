import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Pics from './Pics'
import Resume from './Resume'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

const history = createHistory()

export default function Routes(props) {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={300}>
            <Switch location={props.location}>
              <Route exact path='/' component={() => null} />
              <Route path='/pics' component={Pics} />
              <Route path='/resume' component={Resume} />
              {/* <Route component={() => <div>404 Not found </div>} /> */}
              <Redirect from='*' to='/' component={() => null} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )
}

