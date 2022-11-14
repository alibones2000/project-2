import React, {useState} from 'react'

function MovieCard({film}) {
const [originalTitle, setOriginalTitle] = useState (true)
const {title, original_title, original_title_romanised, image, description, director, release_date} = film

function handleClick () {
  setOriginalTitle((originalTitle) => !originalTitle)
}
  return (
    <li >
      <div >
        <img onClick={handleClick} src={image} alt={title}/>
        <div >
          <h1>{title}</h1>
          <h2>{originalTitle ? original_title : original_title_romanised}</h2>
          <p>{description}</p>
          <p>{director}</p>
          <p>{release_date} </p>
        </div>
      </div>
    </li>
  );
}

export default MovieCard;
