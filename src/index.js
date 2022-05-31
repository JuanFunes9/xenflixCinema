import React from 'react';
import { createRoot } from 'react-dom/client';
//Components
import MoviesApp from './MoviesApp';
//CSS
import './index.css';

const divRoot = createRoot( document.querySelector( '#root' ) );
divRoot.render( <MoviesApp /> );
