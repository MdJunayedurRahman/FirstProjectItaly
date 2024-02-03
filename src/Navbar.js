import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
      style={{
        boxShadow: "0px 10px 20px black",
        filter: "blur(20)",
        position: "fixed",
        zIndex: "10",
        width: "100%",
      }}
    >
      <div class="container">
        <div>
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            SPA Example
          </Link>
        </div>
        <div className="d-flex">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link fs-5 fw-bold text-white" to="/">
                  Home{" "}
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link nav-link fs-5 fw-bold text-white"
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link nav-link fs-5 fw-bold text-white"
                  to="/Contacts"
                >
                  Contacts
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link nav-link fs-5 fw-bold text-white"
                  to="/Location"
                >
                  Location
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
