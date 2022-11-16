import React , {useState, useEffect} from 'react'
import './App.css';
import Form from './Form'
import MovieContainer from './MovieContainer'
import Nav from './Nav'
import FavPage from './FavPage'
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
function deleteTitle(deletedItem) {
  const updateDeletedFilms = films.filter(film => film.id !== deletedItem.id);
  setFilms(updateDeletedFilms)
}
function updateFavFilm(updatedFilm) {
  const updatedFilms = films.map(film => {
    if (film.id === updatedFilm.id) {
      return updatedFilm
    } else return film
  })
  setFilms(updatedFilms) 
}
const favFilms = films.filter(film => {
  if (film.favorite === true) {
    return film
  } 
})



  return (
    <div className="App">
       <Nav searchFilms={searchFilms} handleSearch={handleSearch}/>
      <Routes>
        <Route path="/" element={<MovieContainer filterAllFilms={filterAllFilms} updateFavFilm={updateFavFilm} searchFilms={searchFilms} handleSearch={handleSearch} deleteTitle={deleteTitle}/>}/>
        <Route path="form" element={<Form handleAddFilm={handleAddFilm}/>}/>
        <Route path="favpage" element={<FavPage favFilms={favFilms}/>}/>
     </Routes>
    </div>
  );
}

export default App;
