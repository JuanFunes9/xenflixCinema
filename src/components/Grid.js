import React from 'react';
//Component
import GridItem from './GridItem';
import Popup from './Popup';
//Helpers

const Grid = ({ items, id }) => {

  const itemsMove = document.querySelector( `#${ id }` );
  let scrollValue = 0;

  const handleSlideRight = () => {
    if( scrollValue >  -4240 ){
      scrollValue -= 265;
      itemsMove.style.transform = `translate( ${ scrollValue }px, 0 )`;
    }
    else{
      scrollValue = 0;
      itemsMove.style.transform = `translate( ${ scrollValue }px, 0 )`;
    }
  }

  const handleSlideLeft = () => {
    if( scrollValue < 0 ){
      scrollValue += 265;
      itemsMove.style.transform = `translate( ${ scrollValue }px, 0 )`;
    }
    else{
      scrollValue = -4240;
      itemsMove.style.transform = `translate( ${ scrollValue }px, 0 )`;
    }
  }

  return (
    <>
      <div className="display-grid">
        <div className="items-static">
          <div className="items-move" id={ id }>
            {
              items.map( item => {
                return <GridItem key={ item.id } movie={ item }/>
              })
            }
          </div>
          <div className="cover-popup" id="cover-popup"></div>
          {
            items.map( item => {
              return <Popup movie={ item } key={ item.id }/>
            })
          }
        </div>
        <button id="left-slider" onClick={ handleSlideLeft }>
          <span className="material-symbols-outlined slider">keyboard_arrow_left</span>
        </button>
        <button id="right-slider" onClick={ handleSlideRight }>
          <span className="material-symbols-outlined slider">keyboard_arrow_right</span>
        </button>
      </div>
    </>
  )
}

export default Grid;