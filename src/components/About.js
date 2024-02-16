import React from "react";

export default function About() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
      <div className="row" style={{ marginTop: "10px", marginBottom: "30px" }}>
        <div className="col-lg-6 mb-3 mb-lg-0">
          <img
            src="about.jpg"
            alt="about"
            className="img-fluid"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div
            className="text-success"
            style={{
              marginTop: "20px",
              marginBottom: "30px",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "1px",
              marginRight: "1px",
            }}
          >
            Un team coeso, dinamico e altamente professionale, con oltre 5 anni
            di esperienza, si avvale di un gruppo di professionisti preparati
            per offrire servizi di pulizia per appartamenti, case, ville,
            condomini, negozi, uffici e ambienti industriali di qualsiasi
            dimensione. Inoltre, forniamo servizi di trasloco e trasporto,
            facchinaggio, svuotamento di cantine, soffitte e garage, smontaggio
            e montaggio di arredi, con preventivi e sopralluoghi gratuiti. Il
            nostro obiettivo principale è selezionare i professionisti più
            qualificati per garantire la massima qualità nei nostri servizi,
            coprendo una vasta gamma di esigenze.
          </div>
        </div>
      </div>
    </div>
  );
}
