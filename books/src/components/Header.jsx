import React from "react";
import "../components/Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand"style={{color:"white"}}>Books Library</Link>
          <button
            className="navbar-toggler"
            style={{color:"white"}}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"style={{color:"white"}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" style={{color:"white"}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"style={{color:"white"}}>Link</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active"style={{color:"white"}}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
