import React from 'react'

function MovieCard({film}) {
const {title, original_title, original_title_romanised, image, description, director, release_date} = film

  return (
    <li >
      <div >
        <img src={image} alt={title}/>
        <div >
          <h1>{title}</h1>
          <h2>Original Title</h2>
          <p>{description}</p>
          <p>{director}</p>
          <p>{release_date} </p>
        </div>
      </div>
    </li>
  );
}

export default MovieCard;
