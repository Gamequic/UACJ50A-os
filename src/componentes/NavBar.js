import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import './../Fonts/fonts.css';

import ButtonSocialMedia from "./ButtonSocialMedia/ButtonSocialMedia";

const NavBarUACJ = () => {
  return (
    <>
      <Navbar className="w-full bg-gradient-to-r from-PANTONE7467C to-PANTONE293C text-primary-50">
        <NavbarBrand className="px-unit-2xl">
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
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="px-unit-2xl">
            <Link className="text-primary-50" href="https://www.uacj.mx/index.html" >Universidad Autónoma de Ciudad Juárez</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Navbar className="p-4 w-full bg-gradient-to-r from-white to-PANTONE293C">
        <NavbarBrand className="px-unit-2xl">
          <img
            src={`${process.env.PUBLIC_URL}/Photos/Logos/Logo50UACJ/logo50_color.png`}
            alt="Logo"
            width={125}
            height={125}
          />
          <p style={{ fontFamily: "desyrel" }} className="m-4 text-PANTONE293C text-inherit font-bold text-xl">¡Hacemos historia!</p>
        </NavbarBrand>
        <NavbarContent class="flex justify-center items-center w-screen">
          <h1 className="text-4xl text-white hidden md:block">50 años de Ingeniería en la UACJ</h1>
        </NavbarContent>
      </Navbar>
    </>
  )
}

export default NavBarUACJ;