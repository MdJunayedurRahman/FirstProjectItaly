import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tv7xtcu",
        "template_tlasnxe",
        form.current,
        "3wFI_YlhkCoKqUrQn"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Messaggio inviato con successo!");
        },
        (error) => {
          console.log(error.text);
          alert("Si è verificato un errore, riprova più tardi.");
        }
      );
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
      <div className="w-full md:w-screen flex flex-col items-center gap-10 relative md:mb-20">
        <div className="info p-4 md:p-0 text-center">
          <strong>TAYESHA di Rahman Tarequr</strong>
          <br />
          <b>Sede Legale e Operativa:</b> Viale G. Marconi 15 - 40050 Loiano
          (BO)
          <br />
          <strong>Cell./WhatsApp: </strong> 3294123984
          <br />
          <strong>Email:</strong> r.tarequr33@gmail.com
          <br />
          <strong>Partita IVA:</strong> 03813561200
          <br />
        </div>
      </div>

      <div className="container mt-4">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3 text-center">
            <label className="form-label">Nominativo</label>
            <input type="text" className="form-control" name="user_name" />
          </div>

          <div className="mb-3 text-center">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="user_email" />
          </div>

          <div className="mb-3 text-center">
            <label className="form-label">Telefono</label>
            <input type="tel" className="form-control" name="user_phone" />
          </div>

          <div className="mb-3 text-center">
            <label className="form-label">Oggetto</label>
            <input
              type="subject"
              className="form-control"
              name="user_subject"
            />
          </div>

          <div className="mb-3 text-center">
            <label className="form-label">Messaggio</label>
            <textarea
              className="form-control"
              name="message"
              style={{ height: "100px" }}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: "rgb(249, 105, 14)",
              border: "none",
              width: "100%", // Full width on mobile
              padding: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
              display: "block",
            }}
          >
            INVIA
          </button>
        </form>
      </div>
      <div className="container mt-5"></div>
    </div>
  );
};

export default Contact;
