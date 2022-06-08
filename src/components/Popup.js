import React, { useState } from 'react';
//genres
import getGenres from '../helpers/getGenres';
import getCredits from '../helpers/getCredits';
import getDate from '../helpers/getDate';

const Popup = ({ movie }) => {

  const [cast, setCast] = useState('');
  const [date, setDate] = useState('');

  const handlePopUp = () => {
    const popUp = document.getElementById( `${ movie.title }` );
    const coverPopUp = document.getElementById( 'cover-popup' );
    popUp.classList.toggle( 'pop-up-show' );
    coverPopUp.classList.toggle( 'cover-popup-show' );
  }

  getCredits( movie.id ).then( data => setCast( data ) );
  getDate( movie.id ).then( data => setDate( data ) );

    return (
      <div className="pop-up" id={ movie.title }>
        <div className="pop-up-content" >
          <div className="left-popup-conteiner">
            <img src={ movie.posterImg } alt="img"></img>
            <div className="popup-vote">
              <span className="material-symbols-outlined" id="star-popup">star</span>
              <p className="vote-average">{ movie.voteAverage }</p>
            </div>
          </div>
          <div className="right-popup-conteiner">
            <div className="sup">
              <div className="title-year" >
                <h2>{ movie.title }</h2>
                <p>{ getGenres( movie.genreId ) }</p>
              </div>
              <div className="overview" >
                <p>{ movie.overview }</p>
              </div>
            </div>
            <div className="more-info">
              <div className="year" >
                <h5>Year:</h5>
                <p>{ date }</p>
              </div>
              <h5>Cast:</h5>
              <p>{ cast }</p>
            </div>
          </div>
        </div>
        <div className="popup-close" onClick={ () => handlePopUp() }>
          <span className="material-symbols-outlined">close</span>
        </div>
      </div>
    )
}

export default Popup;