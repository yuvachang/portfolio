import React, { Component } from 'react'

const Menu = props => {
  return (
    <div className={props.visible ? 'menu' : 'menu hidden'} >
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>About Me</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Menu
