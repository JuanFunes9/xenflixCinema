import React from 'react';
import imageWarning from '../img/not_found.jpg';

const GridItem = ({ movie }) => {


  const handleImg = ( image ) => {
    if ( image === 'https://image.tmdb.org/t/p/w500/null' ){
      return imageWarning;
    }
    else{
      return image;
    }
  }

  return (
    <>
      <div className="item"  id={ movie.id } onClick={ ()=> alert( movie.overview ) }>
        <img src={ handleImg( movie.posterImg ) } alt="img"></img>
        <h4>{ movie.title }</h4>
        <div className="vote-container">
          <p className="vote-average">{ movie.voteAverage }</p>
          <span className="material-symbols-outlined" id="star">star</span>
          <p className="vote-count">({ movie.voteCount })</p>
        </div>
      </div>
    </>
  )

}

export default GridItem;