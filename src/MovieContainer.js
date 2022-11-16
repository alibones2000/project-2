import MovieCard from './MovieCard'
import React from 'react'
import Search from './Search'


function MovieContainer({filterAllFilms, updateFavFilm, searchFilms, handleSearch, deleteTitle}) {

const eachFilm = filterAllFilms.map(film => {
return < MovieCard key={film.id} film={film} updateFavFilm={updateFavFilm} deleteTitle={deleteTitle}/>
})

  return (
    <div>
      <Search searchFilms={searchFilms} handleSearch={handleSearch}/>
      {eachFilm}
   
    </div>
  )
}
export default MovieContainer;