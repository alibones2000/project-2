import {useState} from 'react'

function FavCard({favFilm}) {
    const [originalTitle, setOriginalTitle] = useState (true)
    const {title, original_title, original_title_romanised, image, description, director, release_date, producer, running_time} = favFilm

    function handleFavTitle () {
        setOriginalTitle((originalTitle) => !originalTitle)
    }
  return (
    <div className='film-info'>
    <div >
        <img className='img-size' onClick={handleFavTitle} src={image} alt={title}/>
        </div>
        <div >
          <h1>{title}</h1>
          <h2>{originalTitle ? original_title : original_title_romanised}</h2>
          <p>{description}</p>
          <p>Director: {director}</p>
          <p>Release Date: {release_date} </p>
          <p>Producer: {producer}</p>
          <p>Run Time: {running_time} Minutes</p>
        </div>
    </div>
  );
}export default FavCard;