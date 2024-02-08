import React from "react";

export default function WhereWeAre() {
  return (
    <div className="block">
      <div className="path">Sei in: Dove siamo</div>

      {/* Information Section */}
      <div className="w-full md:w-screen flex flex-col items-center gap-10 relative md:mb-20">
        <div className="info p-4 md:p-0 text-center">
          <strong>TAYESHA di Rahman Tarequr</strong>
          <br />
          <b>Sede Legale e Operativa:</b> Viale G. Marconi 15 - 40050 Loiano
          (BO)
          <br />
          <strong>Cell./WhatsApp:</strong> 3294123984
          <br />
          <strong>Email:</strong> r.tarequr33@gmail.com
          <br />
          <strong>Partita IVA:</strong> 03813561200
          <br />
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full md:w-screen flex flex-col items-center gap-10 relative md:mb-20">
        <div className="block md:hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.063057997624!2d11.32442671474308!3d44.267522293703045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ad86b19a8f687%3A0x2c63d84d42088c19!2sViale%20Marconi%2C%2015%2C%2040050%20Loiano%20BO%2C%20Italy!5e0!3m2!1sen!2sfi!4v1707215624032!5m2!1sen!2sfi"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
