import MovieCard from './MovieCard'
import React from 'react'



function MovieContainer({filterAllFilms, updateFavFilm, deleteTitle}) {

const eachFilm = filterAllFilms.map(film => {
return < MovieCard key={film.id} film={film} updateFavFilm={updateFavFilm} deleteTitle={deleteTitle}/>
})

  return (
    <div>
      {eachFilm}
   
    </div>
  )
}
export default MovieContainer;