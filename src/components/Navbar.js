import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

{/*Pass props as parameter in component*/}

export default function Navbar(props) {
  return (
    // use navbar-dark , bg-dark for dark and light for light 
    // Code is copied from GetBootstrap.com and replaced class with className as per React Syntax
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>      
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">{props.title}</a> */}
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
            {/* <a className="nav-link active"  href="#">Home</a> */}
              <Link className="nav-link active"  to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">{props.ContactText}</Link>
            </li>            
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          {/* This is a javascript syntax to white some logic in html tag  we have to write inside `` */}
          
          <div className={`form-check form-switch me-auto text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" forname="flexSwitchCheckDefault">{props.mode === 'light'?'Enable Dark Mode':'Enable Light Mode'}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

{/* propTypes is used to declare the datatype. we can set default propTypes by declaring as below. 
Means if propTypes not passed then use the default one */}
Navbar.propTypes = {
                      title : PropTypes.string.isRequired,
                      aboutText : PropTypes.string.isRequired
                   }
Navbar.defaultProps = {
                        title : "TextUtils",
                        aboutText : "About TextUtils"
                      };