import React, { useState, useEffect } from 'react';
//components
import Grid from './Grid';
//helpers

const Block = ({ title, id, getItems, options }) => {

  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);

  if( options.length < 1 ){
    options = false;
  }

  useEffect(() => {
    getItems( filter ).then( data => setItems( data ) );
  }, [filter, getItems]);

  useEffect( () => {
    setFilter( 'popular?' )
  }, [] );

  return (
    <div className="block" name={ id }>
      <div className="block-header-cont" id={ title }>
        <div className="block-header-left" >
          <div className="title-container" >
            <h2>{ title }</h2>
          </div>
          { options ?
            <div className="select-container">
              <label htmlFor="filter" ><h4>Mostrar</h4></label>
              <select name="filter" id="filter" onChange={ e => setFilter( e.target.value ) }>
                {
                  options.map( option => {
                    return <option key={ option.value } value={ option.value }>{ option.label }</option>
                  } )
                }
              </select>
            </div> : ''
          }
        </div>
      </div>
      <div id="barra-separadora"></div>
      <Grid items={ items } id={ id }/>
    </div>
  )
};

export default Block;