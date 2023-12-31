import React from 'react'
import PropTypes from 'prop-types'
// import {Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.tittle}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">{props.aboutUs}</a>
              </li> */}
             
              
            </ul>
            <div className='color' onClick={props.toggle2Mode}></div>
            <div className='color2' onClick={props.toggle3Mode}></div>
            <div className='color3' onClick={props.toggle4Mode}></div>
            <div className='color4' onClick={props.toggle5Mode}></div>
            <div className='color5' onClick={props.toggle6Mode}></div>

            <div className="form-check form-switch">
  <input className="form-check-input "  type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === 'light'?'dark':'light'} Mode`}</label>
</div>

          </div>
        </div>
      </nav>
  )
}
Navbar.propTypes ={tittle: PropTypes.string,
}
Navbar.defaultProps = {
tittle: "set tittle here",
 aboutUs : "hello"
  };