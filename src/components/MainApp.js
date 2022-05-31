import React from 'react';
//Components
import Block from './Block';
//Helpers:
import getMovies from '../helpers/getMovies';
import getSeries from '../helpers/getSeries';
import getActors from '../helpers/getActors';

const MainApp = () => {

  const moviesOptions = [
    { value: 'popular?', label: 'Más populares'},
    { value: 'now_playing?', label: 'Actualmente en cines'},
    { value: 'top_rated?', label: 'Mejor valorados'},
    { value: 'upcoming?', label: 'Próximos estrenos'},
  ];

  const seriesOptions = [
    { value: 'popular?', label: 'Más populares'},
    { value: 'on_the_air?', label: 'Emitiendose actualmente'},
    { value: 'top_rated?', label: 'Mejor valoradas'},
  ];

  const actorsOptions = [
    { value: 'popular?', label: 'Más populares'},
  ];

  return (
    <main>

      <Block
        title={ 'Películas' }
        id={ 'peliculas' }
        getItems={ getMovies }
        options={ moviesOptions }
        searchId={ 'searchMovies' }
      />

      <Block
        title={ 'Series de TV' }
        id={ 'series-tv' }
        getItems={ getSeries }
        options={ seriesOptions }
        searchId={ 'searchSeries' }
      />

      <Block
        title={ 'Personalidades' }
        id={ 'personalidades' }
        getItems={ getActors }
        options={ actorsOptions }
        searchId={ 'searchActors' }
      />

    </main>
  )
}

export default MainApp;