import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import './../Fonts/fonts.css';

const NavBarUACJ = () => {
  return (
    <>
      <Navbar className="w-full h-full bg-gradient-to-r from-PANTONE7467C to-PANTONE293C text-primary-50">
        <NavbarBrand className="px-unit-2xl">
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
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="px-unit-2xl">
            <Link className="text-primary-50" href="https://www.uacj.mx/index.html" >Universidad Autónoma de Ciudad Juárez</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Navbar className="p-4 w-full h-full bg-gradient-to-r from-white to-PANTONE293C">
        <NavbarBrand className="px-unit-2xl">
          <img
            src={`${process.env.PUBLIC_URL}/logo50_color.png`}
            alt="Logo"
            width={125}
            height={125}
          />
          <p style={{ fontFamily: "desyrel" }} className="m-4 text-PANTONE293C text-inherit font-bold text-xl">¡Hacemos historia!</p>
        </NavbarBrand>
        <NavbarContent class="flex justify-center items-center w-screen">
          <h1 className="text-5xl text-white">50 años de Ingeniería en la UACJ</h1>
        </NavbarContent>
      </Navbar>
    </>
  )
}

export default NavBarUACJ;