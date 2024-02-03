import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light lg-4">
      <div class="container">
        <Link className="navbar-brand" to="/">
          SPA Example
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/About">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/ContactUs">
                ContactUs
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Location">
                Location
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
