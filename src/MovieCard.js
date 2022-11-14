import React from 'react'

function MovieCard() {


  return (
    <li className="cards__item">
      <div className="card">
        <img 
          src={pictureUrl}
          alt=
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{bioDisplay ? bio : quote}</p>
          <p>Age: {(new Date().getFullYear()) - born}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>
              {fromUSA ? "USA-based" : "Working Overseas"}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MovieCard;
