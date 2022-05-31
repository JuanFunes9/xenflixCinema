import React from 'react';
//Components
import NavBar from './components/NavBar';
import MainApp from './components/MainApp';
//loadScreen
// import { Spinner } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'

const MoviesApp = () => {
  return (
    <>
      <NavBar />
      <MainApp />
    </>
  )
}

export default MoviesApp;