import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaSearchLocation,FaFont } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Home() {
  const boxStyle = {
    width: "200px",
    height: "200px",
    border: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "20px", // Add margin between boxes
  };

  return (
    <div className="container-fluid">
      <Link className="nav-link" to="/">
        Civil and industrial cleaning. Painting, clearing of cellars and
        warehouses. Move.
      </Link>
      <div className="row">
        <div className="col-lg-4 col-md-6 ">
          <div className="bg-success" style={boxStyle}>
            <IconContext.Provider
              value={{ className: "shared-class", size: 70 }}
            >
              <>
                <FaFont />
                <p>About</p>
              </>
            </IconContext.Provider>
            <button
              className="btn btn-outline-dark text-white my-2 my-sm-0"
              type="submit"
               onClick={() => {
                window.location.href = "/About";
              }}
            >
              Find Out More
            </button>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="bg-success" style={boxStyle}>
            <IconContext.Provider
              value={{ className: "shared-class", size: 70 }}
            >
              <>
                <FaEnvelope />
                <p>Contacts</p>
              </>
            </IconContext.Provider>
            <button
              className="btn btn-outline-dark text-white my-2 my-sm-0"
              type="submit"
              onClick={() => {
                window.location.href = "/Contacts";
              }}
            >
              Find Out More
            </button>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="bg-success" style={boxStyle}>
            <IconContext.Provider
              value={{ className: "shared-class", size: 70 }}
            >
              <>
                <FaSearchLocation />
                <p>Location</p>
              </>
            </IconContext.Provider>
            <button
              className="btn btn-outline-dark text-white my-2 my-sm-0"
              type="submit"
              onClick={() => {
                window.location.href = "/Location";
              }}
            >
              Find Out More
            </button>
          </div>
        </div>
      </div>

      <div className="info">
        <div className="infoHeader">Info/Bio</div>
        Mr Pathan Sas Via del Pilastro 15-6, 40127 Bologna (Bologna) Telephone:
        +39 3292121210 VAT number: 02823441205 NETWORK: 148895.reteimprese.org
        SECTOR: Ecology and Thermotechnics CATEGORY: Cleaning Companies Cookie
        Preferences
      </div>
    </div>
  );
}
