import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <div className='infoBar'>
      <Link to='/' >
      Studio Ghibili Movies
      </Link>
    <Link to='/fav' >
       Favorite Movies
      </Link>
      <Link to='/form' >
      New Movie
      </Link>
      </div>
      </nav>
 
  )
}
export default Nav;
