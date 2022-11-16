import {useState} from 'react'

function FavCard({favFilm}) {
    const [originalTitle, setOriginalTitle] = useState (true)
    const {title, original_title, original_title_romanised, image, description, director, release_date} = favFilm

    function handleFavTitle () {
        setOriginalTitle((originalTitle) => !originalTitle)
    }
  return (
    <div>
    <div >
        <img onClick={handleFavTitle} src={image} alt={title}/>
        </div>
        <div >
          <h1>{title}</h1>
          <h2>{originalTitle ? original_title : original_title_romanised}</h2>
          <p>{description}</p>
          <p>{director}</p>
          <p>{release_date} </p>
        </div>
    </div>
  );
}export default FavCard;