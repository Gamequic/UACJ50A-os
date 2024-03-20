import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import './../Fonts/fonts.css';

const NavBarUACJ = () => {
  return (
    <>
      <Navbar className="w-full h-full bg-gradient-to-r from-PANTONE293C to-zinc-400 text-primary-50">
        <NavbarBrand className="px-unit-2xl">
          <p> Redes Sociales </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="px-unit-2xl">
            <Link className="text-primary-50" href="https://www.uacj.mx/index.html" >Universidad Autónoma de Ciudad Juárez</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Navbar className="w-full h-full bg-gradient-to-r from-PANTONE7467C to-zinc-400">
        <NavbarBrand className="px-unit-2xl">
          <img
            src={`${process.env.PUBLIC_URL}/logo50_color.png`}
            alt="Logo"
            width={125}
            height={125}
          />
          <p style={{ fontFamily: "desyrel" }} className="text-inherit font-bold text-xl">¡Hacemos historia!</p>
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default NavBarUACJ;