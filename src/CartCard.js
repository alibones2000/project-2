import {useState} from 'react'

function CartCard({cartFilm, deleteTitle}) {
    const [originalTitle, setOriginalTitle] = useState (true)
    const {id, title, original_title, original_title_romanised, image, description, director, release_date, running_time} = cartFilm

    function handleCartTitle () {
        setOriginalTitle((originalTitle) => !originalTitle)
    }
    function handleDelete() {
      fetch(`http://localhost:3000/films/${id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({cart : !cartFilm.cart}),
      })
      .then(response => response.json())
      .then((data)=> deleteTitle(data))
    }
  return (
    <div className='film-cart-info'>
    <div >
        <img className='img-cart-size' onClick={handleCartTitle} src={image} alt={title}/>
        </div>
        <div >
          <h1>{title}</h1>
          <h2>{originalTitle ? original_title : original_title_romanised}</h2>
          <p>{description}</p>
          <p>Director: {director}</p>
          <p>Release Date: {release_date} </p>
          <p>Run Time: {running_time} Minutes</p>
          <button  onClick={handleDelete} id="delete-title">
        Remove From Cart 🗑️
      </button>
        </div>
    </div>
  );
}export default CartCard;