import MovieCard from './MovieCard'
import React from 'react'



function MovieContainer({filterAllFilms, updateFavFilm, updateCartFilm}) {

const eachFilm = filterAllFilms.map(film => {
return < MovieCard key={film.id} film={film} updateFavFilm={updateFavFilm} updateCartFilm={updateCartFilm}/>
})

  return (
    <div>
      {eachFilm}
   
    </div>
  )
}
export default MovieContainer;