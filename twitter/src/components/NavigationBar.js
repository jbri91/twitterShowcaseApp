import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar()  {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
      <a href="#twitter" className="navbar-brand font-weight-bolder">Twitter Showcase App</a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                  <a href="#homePage" className="nav-link">Homepage</a>
              </li>
              <li className="navbar-item">
                  <a href="#search" className="nav-link">Search</a>
              </li>
              <li className="navbar-item">
                  <a href="#random" className="nav-link">Random</a>
              </li>
          </ul>
      </div>
  </nav>
    );
  }


export default NavigationBar;
