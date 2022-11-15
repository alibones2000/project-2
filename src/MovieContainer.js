import MovieCard from './MovieCard'
import React from 'react'
import Search from './Search'


function MovieContainer({filterAllFilms, updateFavFilm, searchFilms, handleSearch}) {

const eachFilm = filterAllFilms.map(film => {
return < MovieCard key={film.id} film={film} updateFavFilm={updateFavFilm}/>
})

  return (
    <div>
      <Search searchFilms={searchFilms} handleSearch={handleSearch}/>
      {eachFilm}
   
    </div>
  )
}
export default MovieContainer;