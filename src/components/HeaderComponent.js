import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"


export default function ImagesComponent()
{
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
    setNavbarOpen(false)
    }
    return(
        <div className={`Header  ${navbarOpen ? " showMenu slide-in" : ""}`}>
            <button onClick={handleToggle}>
            {navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "25px", height: "25px" }} />
                ) : (
                <FiMenu style={{ color: "#7b7b7b", width: "25px", height: "25px" }} />
                )}
            </button>
            <ul className="NavbarList">
                <Link onClick={closeMenu} to="/"><li>Map</li></Link>
                <Link onClick={closeMenu} to="/information"><li>Information</li></Link>
                <Link onClick={closeMenu} to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    )
}
