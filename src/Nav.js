import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to='/' >
      Collection of Studio Ghibili Movies
      </Link>
    <Link to='/favpage' >
       Go To My Favorite Studio Ghibili Movies
      </Link>
      <Link to='/form' >
      Add a New Studio Ghibili Movie
      </Link>
  </nav>
  )
}
export default Nav;
