import React, { useState, useEffect } from 'react';
//components
import Grid from './Grid';
//helpers

const Block = ({ title, id, getItems, options, searchId }) => {

  const [filter, setFilter] = useState('');
  // const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems( filter ).then( data => setItems( data ) );
  }, [filter, getItems]);

  useEffect( () => {
    setFilter( 'popular?' )
  }, [] );

  const handleSearchIcon = () => {
    const input = document.querySelector(`#${ searchId }`);
    input.classList.toggle( 'visible' )
  }

  return (
    <div className="block" >
      <div className="block-header-cont" id={ title }>
        <div className="block-header-left" >
          <div className="title-container" >
            <h2>{ title }</h2>
          </div>
          <div className="select-container">
            <label htmlFor="filter" ><h4>Mostrar</h4></label>
            <select name="filter" id="filter" onChange={ e => setFilter( e.target.value ) }>
              {
                options.map( option => {
                  return <option key={ option.value } value={ option.value }>{ option.label }</option>
                } )
              }
            </select>
          </div>
        </div>
        <div className="block-header-right" >
          <div className="search-input-container" id={ searchId }>
            <input type="text" placeholder="Busca algo..."></input>
          </div>
          <div className="search-icon-container" >
            <span className="material-symbols-outlined" id="search-icon" onClick={ handleSearchIcon }>search</span>
          </div>
        </div>
      </div>
      <div id="barra-separadora"></div>
      <Grid items={ items } id={ id }/>
    </div>
  )
};

export default Block;