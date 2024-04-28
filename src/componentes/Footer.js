import React from "react";

import ButtonSocialMedia from "./ButtonSocialMedia/ButtonSocialMedia";

const FooterUACJ = () => {
  return (
    <footer className="bg-PANTONE293C w-full">
      <div className="m-32" />
      <div className="flex justify-center items-center h-full flex-col">
        <img 
          src={`${process.env.PUBLIC_URL}/Photos/Logos/Logo50UACJ/logo50_blanco.png`}
          alt="Logo"
          width={150}
          height={150}
          className="m-4"
        />
        <p style={{ fontFamily: "desyrel" }} className="text-white text-inherit font-bold text-3xl">¡Hacemos historia!</p>
        <div className="flex">
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/Photos/Logos/SocialMedia/Facebook.svg`}
              link={'https://www.facebook.com/somosuacj/'}
            />
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/Photos/Logos/SocialMedia/Instagram.svg`}
              link={'https://www.instagram.com/somosuacj/'}
            />
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/Photos/Logos/SocialMedia/YT.svg`}
              link={'https://www.youtube.com/UACJTV'}
            />
          </div>
        <p className="text-white" >Copyright© 2024 | 50 Aniversario | Universidad Autónoma de Ciudad Juárez. </p>
      </div>
    </footer>
  )
}

export default FooterUACJ