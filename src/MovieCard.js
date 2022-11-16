import React, {useState} from 'react'

function MovieCard({film, updateFavFilm, deleteTitle}) {
const [originalTitle, setOriginalTitle] = useState (true)
const {id, title, original_title, original_title_romanised, image, description, director, release_date, favorite} = film



function handleClick () {
  setOriginalTitle((originalTitle) => !originalTitle)
}

function handleFavClick(){

  fetch(`http://localhost:3000/films/${id}`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({favorite : !film.favorite}),
  })
  .then(response => response.json())
  .then(data => updateFavFilm(data))
}

function handleDelete() {
  fetch(`http://localhost:3000/films/${id}`, {
    method: 'DELETE', 
  })
  .then(response => response.json())
  .then(()=> deleteTitle(film))
}
  return (

      <div className='film-info' >
        <img className='img-size' onClick={handleClick} src={image} alt={title}/>
        <div >
          <h1>{title}</h1>
          <h2>{originalTitle ? original_title : original_title_romanised}</h2>
          <p>{director}</p>
          <p>{release_date} </p>
          <p>{description}</p>
          <button  onClick={handleFavClick} id="add-to-fav">
        Add to Favorites{favorite ? "💓" : "🤍"} 
      </button>
      <button  onClick={handleDelete} id="delete-title">
        Delete Film 🗑️
      </button>
        </div>
   
      </div>
  );
}

export default MovieCard;
