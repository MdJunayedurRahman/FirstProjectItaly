import React from "react";
import { FaEnvelope, FaFont, FaSearchLocation } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export default function Home() {
  const boxStyle = {
    width: "250px",
    height: "250px",
    border: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "20px",
    marginRight: "30px",
    marginLeft: "45px",
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
      <div className="row" style={{ marginTop: "10px", marginBottom: "30px" }}>
        <div className="col-lg-6 mb-3 mb-lg-0">
          <img
            src="cleaning.jpg"
            alt="cleaning"
            className="img-fluid"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-lg-6">
          <img
            src="delivery.jpg"
            alt="delivery"
            className="img-fluid"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div
        className="row"
        style={{
          marginTop: "20px",
          marginBottom: "30px",
          fontSize: "25px",
          fontWeight: "bold",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="text-success">OPERATIVI 24 ORE SU 24</div>
        <div className="text-success">PREVENTIVI GRATUITI</div>
        <div className="text-success">Cell./WhatsApp 3294123984</div>
        <div className="text-success">Chiamaci ora</div>
        <div className="text-success">RAHMAN TAREQUR</div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="bg-success" style={boxStyle}>
            <IconContext.Provider
              value={{ className: "shared-class", size: 70 }}
            >
              <>
                <FaFont />
                <p>Chi Siamo</p>
              </>
            </IconContext.Provider>
            <Link
              to="/About"
              className="btn btn-outline-dark text-white my-2 my-sm-0"
            >
              SCOPRI DI PIÙ
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-3">
          <div className="bg-success" style={boxStyle}>
            <IconContext.Provider
              value={{ className: "shared-class", size: 70 }}
            >
              <>
                <FaEnvelope />
                <p>Contatti</p>
              </>
            </IconContext.Provider>
            <Link
              to="/Contacts"
              className="btn btn-outline-dark text-white my-2 my-sm-0"
            >
              SCOPRI DI PIÙ
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-3">
          <div className="bg-success" style={boxStyle}>
            <IconContext.Provider
              value={{ className: "shared-class", size: 70 }}
            >
              <>
                <FaSearchLocation />
                <p>Posizione </p>
              </>
            </IconContext.Provider>
            <Link
              to="/Location"
              className="btn btn-outline-dark text-white my-2 my-sm-0"
            >
              SCOPRI DI PIÙ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
