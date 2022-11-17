import React from 'react'
import {Link} from 'react-router-dom';
import CartCard from "./CartCard"


 function CartPage({cartFilms, deleteTitle}) {
  const eachCartFilm = cartFilms.map(cartFilm => {
    return <CartCard key={cartFilm.id} cartFilm={cartFilm} deleteTitle={deleteTitle}/>
  })
  
  return (
    <div id="fav">
      <div>
      <h1>Ready for Purchase Studio Ghibili Films</h1>
      <Link style = {{textDecoration: 'none', color:'black'}} to='/moviecontainer' >
      Back To Film Page
      </Link>
      {eachCartFilm}
    </div>
   </div>
  )
}
export default CartPage;
