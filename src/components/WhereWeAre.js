import React from 'react';

export default function WhereWeAre() {
    return (
        <div class='block'>
            <div class="path">Sei in: Dove siamo</div>
            <div className="w-screen flex flex-col items-center gap-10 relative md:mb-20 ">
                <div class='info'>
                    <h1>Dove siamo</h1>
                    <strong>Mr Pathan Sas</strong>
                    <br />
                    <b>Sede Legale e Operativa:</b> Via del Pilastro, 15-6 , 40127 Bologna  - Bologna
                    <br />
                    <strong>Telefono:</strong>
                    3292121210
                    <br />
                    <strong>Fax:</strong>
                    <br />
                    <strong>Partita IVA:</strong>
                    02823441205
                    <br />
                </div>

            </div>
                <div className="w-screen flex flex-col items-center gap-10 relative md:mb-20 ">
                    <div className="hidden md:block">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.351204327641!2d11.389275476890218!3d44.507959271074554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e2ca190bcf193%3A0x57b3886b063c93e7!2sVia%20del%20Pilastro%2C%2015%2F6%2C%2040127%20Bologna%20BO%2C%20Italy!5e0!3m2!1sen!2sfi!4v1706948101804!5m2!1sen!2sfi" 
                        width="1150"
                        height="620"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
              
                    <article className="hidden md:flex flex-col gap-5  h-[530px] bg-white border border-lightgray rounded-lg pl-[56px] pt-[56px] pr-[90px] absolute right-80 top-32">
    
                    </article>
    
                </div>
        </div>


	

    )
}

