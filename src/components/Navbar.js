import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar () {
    return (
        <nav id="nav" class= "navbar navbar-expand-lg navbar-light bg-light lg-4">
  <div class="container">
    <Link className="navbar-brand" to="/">SPA Example</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupport">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/About">About</Link>
      </li>
        <li class="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/dropDown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="/action">Action</Link>
          <Link class="dropdown-item" to="/another">Another action</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="/something">Something else here</Link>
        </div>
        </li>
       <li class="nav-item">
        <Link class="nav-link" to="/ContactUs">ContactUs</Link>
      </li>
      </ul>
       <div class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
    </div>
  </div>
</nav>
    );
}