import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import emailjs from '@emailjs/browser';


function Checkout({}) {
const form = useRef();


const [newTitle, setNewTitle] = useState('')
const [cardInfo, setCardInfo] = useState('')
const[emailAddress, setEmailAddress] = useState('')

function handleSubmit(e){
  e.preventDefault();
  emailjs.sendForm('service_mokb0jf', 'template_p409mi3', form.current, 'VCgJ_An6l4ksKowTW')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};


return (
  <div className="new-movie-form">
    <h2>Checkout Film Ticket</h2>
    <div className="form-link">
    <Link style = {{textDecoration: 'none', color:'black'}} to='/moviecontainer' >
      Back To Film Page
      </Link>
      </div>
    <form 
    ref={form}
    className="form"
    onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="name" 
      placeholder="Name" 
      onChange={(e)=> setNewTitle(e.target.value)} 
      value={newTitle}/> 
      <input 
      type="number" 
      name="card-info" 
      placeholder="Card Info" 
      onChange={(e)=> setCardInfo(e.target.value)} 
      value={cardInfo}/>
      <input 
      type="text" 
      name="email-address" 
      placeholder="Email Address" 
      onChange={(e)=> setEmailAddress(e.target.value)} 
      value={emailAddress}/>
      <button type="submit">Purchase Ticket</button>
    </form>
   
  </div>
);
}
export default Checkout;
