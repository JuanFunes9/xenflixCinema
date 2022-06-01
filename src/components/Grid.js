import React from 'react';
//Component
import GridItem from './GridItem';
// import WindowAlert from './WindowAlert';
//Helpers

const Grid = ({ items, id }) => {

  const itemsMove = document.querySelector( `#${ id }` );
  let scrollValue = 0;

  const handleSlideRight = () => {
    if( scrollValue >  -4240 ){
      scrollValue -= 265;
      console.log( scrollValue )
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
      console.log( scrollValue )
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