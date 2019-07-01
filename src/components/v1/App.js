import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Nav from './Nav'
import Routes from './Routes'
import createHistory from 'history/createBrowserHistory'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const history = createHistory()

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        {/* <TransitionGroup> */}
          <div className='app'>
            <Nav />
            <Routes />
          </div>
        {/* </TransitionGroup> */}
      </BrowserRouter>
    )
  }
}

export default App
