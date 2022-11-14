import MovieCard from './MovieCard'
import React from 'react'


function MovieContainer({filterAllFilms}) {
const eachFilm = filterAllFilms.map(film => {
return < MovieCard key={film.id} film={film}/>
})

  return (
    <div>
      {eachFilm}
   
    </div>
  )
}
export default MovieContainer;