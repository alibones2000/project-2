import React , {useState, useEffect} from 'react'
import './App.css';
import Form from './Form'
import MovieContainer from './MovieContainer'
import Nav from './Nav'
import Fav from './Fav'
import Search from './Search'


function App() {
  const [films, setFilms] = useState([])
  const [searchFilms, SetSearchFilms] = useState('')

  useEffect(() =>{
    fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data => setFilms(data))
  },[])

  const filterAllFilms = films.filter(filterFilms => {
    return filterFilms.name.toLowerCase().includes(searchFilms.toLowerCase())
  })
  function handleSearch(e){
    SetSearchFilms(e.target.value)
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

  return (
    <div className="App">

      <Form handleAddFilm={handleAddFilm}/>
      <MovieContainer filterAllFilms={filterAllFilms}/>
      <Nav />
      <Fav />
      <Search searchFilms={searchFilms} handleSearch={handleSearch}/>
     
    </div>
  );
}

export default App;
