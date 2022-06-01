import React from 'react';
import { Link } from 'react-scroll';
//Components
import Backdrop from './Backdrop';
import ToggleInfo from './ToggleInfo';

const NavBar = () => {

  const handleToggleInfoOn = () => {
    const toggleInfo = document.querySelector( '#toggle-info' );
    const cover = document.querySelector( '#cover' );
    const homeIcon = document.querySelector( '#home-icon' );
    toggleInfo.classList.toggle( 'toggle-visible' );
    cover.classList.toggle( 'cover-visible' );
    homeIcon.classList.toggle( 'home-icon-hidden' );
  }

  const handleToggleCover = () => {
    const toggleInfo = document.querySelector( '#toggle-info' );
    const cover = document.querySelector( '#cover' );
    const homeIcon = document.querySelector( '#home-icon' );
    toggleInfo.classList.toggle( 'toggle-visible' );
    cover.classList.toggle( 'cover-visible' );
    homeIcon.classList.toggle( 'home-icon-hidden' );
  }

  return (
    <header>
      <nav>
        <div className="nav-content">
          <div className="logo">
            <h1><a href='/'>XENFLIX</a></h1>
            <p>CINEMA</p>
          </div>
          <div className="items">
            <div className="links" >
              <div className="links-container" >
                <Link to="peliculas" spy={true} smooth={true} offset={ -85 } duration={500}>
                  Películas
                </Link>
              </div>
              <div className="links-container" >
                <Link to="series-tv" spy={true} smooth={true} offset={ -85 } duration={500}>
                  Series
                </Link>
              </div>
              <div className="links-container" >
                <Link to="personalidades" spy={true} smooth={true} offset={ -85 } duration={500}>
                  Personalidades
                </Link>
              </div>
            </div>
            <div className="search-icon-container" onClick={ handleToggleInfoOn }>
              <p>Sobre mi</p>
              <span className="material-symbols-outlined">read_more</span>
            </div>
          </div>
        </div>
      </nav>
      <Backdrop />
      <div className="cover" id="cover" onClick={ handleToggleCover }></div>
      <ToggleInfo handleToggleCover={ handleToggleCover } />
      <div className="home-icon" id="home-icon" >
        <Link to="top" spy={true} smooth={true} offset={ -85 } duration={500}>
          <span className="material-symbols-outlined">home</span>
        </Link>
      </div>
    </header>
  )
}

export default NavBar;