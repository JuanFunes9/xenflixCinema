import React from 'react';
// import profilePic from './../img/profile.jpg';
// import hcj from './../img/htmlCssJs.png';
// import reactLogo from './../img/react.png';

const ToggleInfo = ({ handleToggleCover }) => {
  return (
    <div id="toggle-info" className="toggle" >
      <div className="ti-profile-container" >
        <div className="ti-img-container" >
          <img src="https://i.postimg.cc/xkmDLmQf/profile.png" alt="img"></img>
        </div>
        <div className="ti-info-content" >
          <h4>Juan Ignacio Funes</h4>
          <div className="personal-info" >
            <p>&#128187; Back-end developer</p>
            <p>&#128205; Bs. As. - Argentina</p>
          </div>
          <div className="links">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="link">
              <a href="https://github.com/JuanFunes9/xenflixCinema"  target="-blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="link">
              <a href="https://www.linkedin.com/in/juan-funes-267209230/"  target="-blank">
              <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="link">
              <a href="/#">
              <i className="fa-solid fa-house"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="app-desc">
        <h4>??Bienvenido/a!</h4>
        <p>Esta aplicaci??n se conecta a la API de <a href="themoviedb.org" >themoviedb.org</a> y los datos devueltos se imprimen en pantalla de una manera m??s est??tica e interactiva para que el usuario obtenga informaci??n y una breve rese??a de sus pel??culas y series favoritas.</p>
      </div>
      <div className="techs" >
        <h4>Tecnolog??as en este proyecto</h4>
        <div className="techs-container" >
          <div className="tech">
            <img src="https://i.postimg.cc/qzBTWgsw/html-Css-Js.png" alt="img"></img>
          </div>
          <div className="tech">
            <img src="https://i.postimg.cc/5X6MNGkF/react.png" alt="img"></img>
          </div>
        </div>
      </div>
      <div className="close" onClick={ handleToggleCover } >
        <span className="material-symbols-outlined">close</span>
      </div>
    </div>
  )
}

export default ToggleInfo;