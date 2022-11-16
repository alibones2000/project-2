import React from 'react'
import {Link} from 'react-router-dom';
import FavCard from "./FavCard"


 function FavPage({favFilms}) {
  const eachFavFilm = favFilms.map(favFilm => {
    return <FavCard key={favFilm.id} favFilm={favFilm}/>
  })
  
  return (
    <div id="fav">
      <div>
      <h1>My Favorite Studio Ghibili Movies</h1>
      <Link to='/' >
      Back To Film Page
      </Link>
      {eachFavFilm}
    </div>
   </div>
  )
}
export default FavPage;
