import React from "react";
import { Button } from "@nextui-org/react";

const FooterUACJ = () => {
  return (
    <footer className="bg-PANTONE293C w-full">
      <div className="flex justify-center items-center h-full flex-col">
        <img 
          src={`${process.env.PUBLIC_URL}/logo50_blanco.png`}
          alt="Logo"
          width={150}
          height={150}
          className="m-4"
        />
        <p style={{ fontFamily: "desyrel" }} className="text-white text-inherit font-bold text-3xl">¡Hacemos historia!</p>
        <div>
          <Button
            className="m-2 h-10 w-10"
            isIconOnly
            aria-label="Like"
            onClick={() => {window.location.href = "https://www.facebook.com/somosuacj/"}}
          >
            <img src={`${process.env.PUBLIC_URL}/SocialMedia/Facebook.svg`} alt="Facebook" />
          </Button>
          <Button
            className="m-2 h-10 w-10"
            isIconOnly
            aria-label="Like"
            onClick={() => {window.location.href = "https://www.instagram.com/somosuacj/"}}
          >
            <img src={`${process.env.PUBLIC_URL}/SocialMedia/Instagram.svg`} alt="Instagram" />
          </Button>
          <Button
            className="m-2 h-10 w-10"
            isIconOnly
            aria-label="Like"
            onClick={() => {window.location.href = "https://twitter.com/UACJOFICIAL"}}
          >
            <img src={`${process.env.PUBLIC_URL}/SocialMedia/x.svg`} alt="X" />
          </Button>
          <Button
            className="m-2 h-10 w-10"
            isIconOnly
            aria-label="Like"
            onClick={() => {window.location.href = "https://www.youtube.com/UACJTV"}}
          >
            <img src={`${process.env.PUBLIC_URL}/SocialMedia/YT.svg`} alt="YouTube" />
          </Button>
        </div>
        <p className="text-white" >Copyright© 2023 | 50 Aniversario | Universidad Autónoma de Ciudad Juárez. </p>
      </div>
    </footer>
  )
}

export default FooterUACJ