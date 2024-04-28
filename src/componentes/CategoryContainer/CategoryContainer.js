import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { motion } from 'framer-motion';
import './CategoryContainer.css'

const CategoryUACJ = ({ children, title, preview, image }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      id="EventoContainer"
      className="sm:w-1/2 sm:min-w-screen sm:min-w-1/2vw md:w-1/3 md:min-w-screen md:min-w-1/2vw lg:w-1/4 lg:min-w-screen lg:min-w-1/3vw bg-content4 text-primary-50 rounded-small flex-col m-3"
      initiaal={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div id="ImageContainer">
        <img src={image} alt="background" />
        <h1 className={"text-white text-2xl"}>{title}</h1>
      </div>

      <div className="px-unit-2 py-unit-2" >
        {showMore ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            { children ? children: (
              <>
                <img
                  src={`${process.env.PUBLIC_URL}/Photos/NoContent.png`}
                  width={150}
                  height={150}
                  className="m-4"
                  alt="No content"
                />
                <h1 className="text-secondary-800">No hay nada...<br/>¡Por ahora!</h1>
              </>
            ) }
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

export default CategoryUACJ
