import React, {useState} from 'react'
import {Link} from "react-router-dom"

 function Form({handleAddFilm}) {
const [newTitle, setNewTitle] = useState('')
const [newImage, setNewImage] = useState('')
const[newDate, setNewDate] = useState('')

function handleSubmit(e){
e.preventDefault()

const newObj = {
    title: newTitle,
    image: newImage,
    date: newDate
}
handleAddFilm(newObj)
}

return (
  <div className="new-movie-form">
    <h2>New Movie</h2>
    <Link to='/' >
        Back To Film Page
      </Link>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Movie name" onChange={(e)=> setNewTitle(e.target.value)} value={newTitle}/>
      <input type="text" name="image" placeholder="Image URL" onChange={(e)=> setNewImage(e.target.value)} value={newImage}/>
      <input type="number" name="date" placeholder="Release Date" onChange={(e)=> setNewDate(e.target.value)} value={newDate}/>
      <button type="submit">Add Movie</button>
    </form>
  </div>
);
}
export default Form;
