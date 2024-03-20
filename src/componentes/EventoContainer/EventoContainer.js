import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import './EventoContainer.css'

const EventoUACJ = ({ title = 'Title test', preview = "Preview", info = 'info', link, image = `${process.env.PUBLIC_URL}/TestPhotos/Selva.jpg` }) => {
  const [ showMore, setShowMore ] = useState(false);

  const handleShowMore = (boolean) => {
    setShowMore(boolean);
    console.log(showMore);
  }
  
  return (
    <div id="EventoContainer" class="bg-content4 text-primary-50 rounded-small flex flex-col">
      <div id="ImageContainer">
        <img src={image} alt="background" />
        <h1 className="text-white">{title}</h1>
      </div>

      <div className="px-unit-2 py-unit-2" >
        { showMore ? (
          <div className="px-unit-2 py-unit-2" >
            <p className="text-black">{info}</p>
            <Button color="primary" variant="bordered">
              Descargar informacion
            </Button>  
          </div>
        ) : (
          <p className="text-black">{preview}</p>
        ) }
        <Button color="primary" variant="light" onClick={() => {handleShowMore(!showMore)}} >
          Ver más...
        </Button>
      </div>
    </div>
  )
}

export default EventoUACJ