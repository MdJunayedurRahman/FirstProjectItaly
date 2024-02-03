import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky">
      <div className="container">
        <Link className="navbar-brand fs-1 fst-italic mr-auto" to="/">
          SPA Example
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-bold text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-bold text-white" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-bold text-white" to="/Contacts">
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-bold text-white" to="/Location">
                Location
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
