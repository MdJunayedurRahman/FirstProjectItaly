import React from 'react';
import {FaGlobe} from 'react-icons/fa'
import { IconContext } from "react-icons";

export default function Home () {
    return (
        <div class="container-fluid">
        <div class="globe">
        
<IconContext.Provider value={{ className: "shared-class", size: 70 }}>
  <>
    <FaGlobe />
   Agency
  </>
</IconContext.Provider>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Find Out More</button>
          </div>
        </div>
    )
}