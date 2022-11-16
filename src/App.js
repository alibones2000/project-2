import React , {useState, useEffect} from 'react'
import './App.css';
import Form from './Form'
import MovieContainer from './MovieContainer'
import Nav from './Nav'
import Fav from './Fav'
import {Routes, Route} from "react-router-dom"

function App() {
  const [films, setFilms] = useState([])
  const [searchFilms, setSearchFilms] = useState('')
  

  useEffect(() =>{
    fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data => setFilms(data))
  },[])

  const filterAllFilms = films.filter(filterFilms => {
    return filterFilms.title.toLowerCase().includes(searchFilms.toLowerCase())
  })


  function handleSearch(e){
    setSearchFilms(e.target.value)
  }

  function handleAddFilm(newObj){
    fetch('http://localhost:3000/films',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newObj)
  })
  .then(res => res.json())
  .then(data => setFilms([...films, data]))
}
function updateFavFilm(updatedFilm) {
  const updatedFilms = films.map(film => {
    if (film.id === updatedFilm.id) {
      return updatedFilm
    } else return film
  })
  setFilms(updatedFilms)
  const favFilm = updatedFilms.filter(film => {
    if (film.favorite === true) {
      return film
    } 
   
  })
}


  return (
    <div className="App">
       <Nav />
      <Routes>
        <Route path="/" element={<MovieContainer filterAllFilms={filterAllFilms} updateFavFilm={updateFavFilm} searchFilms={searchFilms} handleSearch={handleSearch}/>}/>
        <Route path="form" element={<Form handleAddFilm={handleAddFilm}/>}/>
        <Route path="fav" element={<Fav favFilm={favFilm}/>}/>
     </Routes>
    </div>
  );
}

export default App;
