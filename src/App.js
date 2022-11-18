import React , {useState, useEffect} from 'react'
import './App.css';
import Checkout from './Checkout'
import Home from './Home'
import MovieContainer from './MovieContainer'
import Nav from './Nav'
import CartPage from './CartPage'
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

//   function handleAddFilm(newObj){
//     fetch('http://localhost:3000/films',{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newObj)
//   })
//   .then(res => res.json())
//   .then(data => setFilms([...films, data]))
// }
function deleteTitle(deletedItem) {
  const updateDeletedFilms = films.map(film => {
    if (film.id === deletedItem.id) {
      return deletedItem
    } else return film
  })
  setFilms(updateDeletedFilms) 
}

function updateCartFilm(updatedFilm) {
  const updatedFilms = films.map(film => {
    if (film.id === updatedFilm.id) {
      return updatedFilm
    } else return film
  })
  setFilms(updatedFilms) 
}
const cartFilms = films.filter(film => {
  if (film.cart === true) {
    return film
  } 
})



  return (
    <div className="App">
       <Nav searchFilms={searchFilms} handleSearch={handleSearch}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="moviecontainer" element={<MovieContainer filterAllFilms={filterAllFilms} updateCartFilm={updateCartFilm} searchFilms={searchFilms} handleSearch={handleSearch} />}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="cartpage" element={<CartPage cartFilms={cartFilms} deleteTitle={deleteTitle}/>}/>
     </Routes>
    </div>
  );
}

export default App;
