import React, {useState} from 'react'

function MovieCard({film, updateCartFilm}) {
const [originalTitle, setOriginalTitle] = useState (true)
const {id, title, original_title, original_title_romanised, image, description, director, release_date, cart, price} = film



function handleClick () {
  setOriginalTitle((originalTitle) => !originalTitle)
}

function handleCartClick(){

  fetch(`http://localhost:3000/films/${id}`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({cart : !film.cart}),
  })
  .then(response => response.json())
  .then(data => updateCartFilm(data))
}


  return (

      <div className='film-info' >
        <img className='img-size' onClick={handleClick} src={image} alt={title}/>
        <div >
          <h1>{title}</h1>
          <h2>{originalTitle ? original_title : original_title_romanised}</h2>
          <p>Director: {director}</p>
          <p>Release Date: {release_date} </p>
          <p> price: {price}</p>
          <p>{description}</p>
          <button  onClick={handleCartClick} id="add-to-cart">
        Add to Cart{cart ? "🍿" : ""} 
      </button>
        </div>
   
      </div>
  );
}

export default MovieCard;
