import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <div className='infoBar'>
      <Link to='/' >
      Home
      </Link>
    <Link to='/favpage' >
       Favorites
      </Link>
      <Link to='/form' >
      New Movie
      </Link>
      </div>
      </nav>
 
  )
}
export default Nav;
