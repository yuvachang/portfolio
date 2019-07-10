import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'

const Nav = () => {
  return (
    <div id='nav'>
      <Link to='/'>
        <div className='title'>Yuva Chang</div>
      </Link>
      <NavMenu />
    </div>
  )
}

export default Nav