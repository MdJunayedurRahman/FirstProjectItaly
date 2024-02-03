import React from 'react';
import { Link } from "react-router-dom";
import {FaEnvelope,FaSearchLocation, FaBuilding} from 'react-icons/fa'
import { IconContext } from "react-icons";

export default function Home () {
    return (
        <div class="container-fluid">
          <Link class="nav-link" to="/">
                Civil and industrial cleaning. Painting, clearing of cellars and
      warehouses. Move.
              </Link>
           
    
        
<IconContext.Provider value={{ className: "shared-class", size: 70 }}>
  <>
    <FaBuilding />
   About
  </>
</IconContext.Provider>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Find Out More</button>


          <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
  <>
    <FaEnvelope />
   Contacts
  </>
</IconContext.Provider>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Find Out More</button>

                <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
  <>
    <FaSearchLocation />
   Location
  </>
</IconContext.Provider>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Find Out More</button>

          <div class='info'>
          <div class='infoHeader'>
            Info/Bio
          </div>
    Mr Pathan Sas
    Via del Pilastro 15-6, 40127 Bologna (Bologna)
    Telephone: +39 3292121210
    VAT number: 02823441205
    NETWORK: 148895.reteimprese.org
    SECTOR: Ecology and Thermotechnics
    CATEGORY: Cleaning Companies
    Cookie Preferences
          </div> 
      </div>


    )
}