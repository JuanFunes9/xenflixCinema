import React from 'react';

const Popup = ({ movie, handlePopUp }) => {
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
              </div>
              <div className="overview" >
                <p>{ movie.overview }</p>
              </div>
            </div>
            <div className="more-info">
              <h5>Directed by:</h5>
              <h5>Starring:</h5>
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