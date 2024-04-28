import React from "react";
import './ButtonSocialMedia.css'

const ButtonSocialMedia = ({ img, link }) => {
    return (
        <a className="ButtonSocialMedia" href={link} >
            <img
                src={img}
                alt="Facebook"
            />
        </a>
    )
}

export default ButtonSocialMedia;