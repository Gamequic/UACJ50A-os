import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { motion } from 'framer-motion';
import './EventoContainer.css'

const EventoUACJ = ({ title = 'Title test', preview = "Preview", info = 'info', link, qr, image = `${process.env.PUBLIC_URL}/TestPhotos/Selva.jpg` }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      id="EventoContainer"
      className="sm:w-1/2 sm:min-w-screen sm:min-w-1/2vw md:w-1/3 md:min-w-screen md:min-w-1/2vw lg:w-1/4 lg:min-w-screen lg:min-w-1/3vw bg-content4 text-primary-50 rounded-small flex-col m-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div id="ImageContainer">
        <img src={image} alt="background" />
        <h1 className="text-white">{title}</h1>
      </div>

      <div className="px-unit-2 py-unit-2" >
        {showMore ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-black">{info}</p>
            <img
              src={qr}
              alt="qr"
              width='200px'
              height='200px'
            />
            <Button color="primary" variant="bordered" onClick={() => {window.location.href = link}}>
              Descargar información
            </Button>
          </motion.div>
        ) : (
          <p className="text-black">{preview}</p>
        )}
        <Button color="primary" variant="light" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Ver menos" : "Ver más..."}
        </Button>
      </div>
    </motion.div>
  )
}

export default EventoUACJ
