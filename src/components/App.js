import React, { Component } from 'react'
import Menu from './Menu'

class App extends Component {
  state = {
    menu: true,
  }

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu,
    })
  }

  render() {
    return (
      <div className='app'>
        <div className='navbar'>
          <container className='menu-icon'>
            <img
              src={'../images/close.svg'}
              alt='image not found'
              id='close'
              className={this.state.menu ? '' : 'hidden'}
              onClick={this.toggleMenu}
            />

            <img
              src={'../images/hamburger.svg'}
              alt='image not found'
              id='hamburger'
              className={this.state.menu ? 'hidden' : ''}
              onClick={this.toggleMenu}
            />
          </container>
        </div>
        <h3> Yuva Chang </h3>
        <img className='image' id='headshot' src='favicon.ico' alt='wtf' />

        <Menu toggleMenu={this.toggleMenu} visible={this.state.menu} />
      </div>
    )
  }
}

export default App
