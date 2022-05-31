import React from 'react';
//Components
import Backdrop from './Backdrop';
import ToggleInfo from './ToggleInfo';

const NavBar = () => {

  const handleToggleInfo = () => {
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

  const goToTop = () => {
    window.scrollTo( 0, 0);
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
                <a href="#Películas">Películas</a>
              </div>
              <div className="links-container" >
                <a href="#Series de TV">Series</a>
              </div>
              <div className="links-container" >
                <a href="#Personalidades">Personalidades</a>
              </div>
            </div>
            <div className="search-icon-container" onClick={ handleToggleInfo }>
              <p>Sobre mi</p>
              <span className="material-symbols-outlined">read_more</span>
            </div>
          </div>
        </div>
      </nav>
      <Backdrop />
      <div className="cover" id="cover" onClick={ handleToggleCover }></div>
      <ToggleInfo handleToggleCover={ handleToggleCover } />
      <div className="home-icon" id="home-icon" onClick={ goToTop }>
        <span className="material-symbols-outlined">home</span>
      </div>
    </header>
  )
}

export default NavBar;