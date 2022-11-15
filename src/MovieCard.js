import React, {useState} from 'react'

function MovieCard({film, updateFavFilm}) {
const [originalTitle, setOriginalTitle] = useState (true)
const {id, title, original_title, original_title_romanised, image, description, director, release_date} = film
const [favorite, setFavorite] = useState(false)


function handleClick () {
  setOriginalTitle((originalTitle) => !originalTitle)
}

function handleFavClick(){
  setFavorite((favorite) => !favorite)
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
  return (

      <div >
        <img onClick={handleClick} src={image} alt={title}/>
        <div >
          <h1>{title}</h1>
          <h2>{originalTitle ? original_title : original_title_romanised}</h2>
          <p>{description}</p>
          <p>{director}</p>
          <p>{release_date} </p>
        </div>
      <button  onClick={handleFavClick} id="add-to-fav">
        Add to Favorites{favorite ? "💓" : "🤍"} 
      </button>
 
      </div>
  );
}

export default MovieCard;
