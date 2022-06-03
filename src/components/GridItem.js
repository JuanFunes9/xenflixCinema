import React from 'react';
import imageWarning from '../img/not_found.jpg';
//components
import Popup from './Popup';

const GridItem = ({ movie }) => {

  if( movie.overview === '' ){
    movie.overview = 'Lo sentimos, aun no tenemos una descripción para esta película :(';
  }

  const handleImg = ( image ) => {
    if ( image === 'https://image.tmdb.org/t/p/w500/null' ){
      return imageWarning;
    }
    else{
      return image;
    }
  }

  const handlePopUp = () => {
    const popUp = document.getElementById( `${ movie.title }` );
    const coverPopUp = document.getElementById( 'cover-popup' );
    popUp.classList.toggle( 'pop-up-show' );
    coverPopUp.classList.toggle( 'cover-popup-show' );
  }

  return (
    <>
      <div className="item"  id={ movie.id } onClick={ () => handlePopUp() }>
        <img src={ handleImg( movie.posterImg ) } alt="img"></img>
        <div className="info-item-container">
          <h4>{ movie.title }</h4>
          <div className="vote-container">
            <p className="vote-average">{ movie.voteAverage }</p>
            <span className="material-symbols-outlined" id="star">star</span>
            <p className="vote-count">({ movie.voteCount })</p>
          </div>
        </div>
      </div>
      <Popup movie={ movie } handlePopUp={ handlePopUp } />
    </>
  )

}

export default GridItem;