import React from 'react'
import Search from './Search';
import {Link} from 'react-router-dom'

function Nav({searchFilms, handleSearch, }) {
  return (
    <div className='infoBar'>
      <ul>
        <li className="nav-button">
      <Link style = {{textDecoration: 'none', color:'white'}} to='/' >
         Home
      </Link>
      </li>
      <li className="nav-button">
    <Link style = {{textDecoration: 'none', color:'white'}} to='/favpage' >
    Favorites
      </Link>
      </li>
      <li className="nav-button">
      <Link  style =  {{textDecoration: 'none', color:'white'}} to='/form' >
        New Movie
      </Link>
      </li>
      </ul>
      <Search searchFilms={searchFilms} handleSearch={handleSearch}/>
      </div>
 
  )
}
export default Nav;
