import React from "react";

class HeaderComponent extends React.Component
{

    render(){
        return <div className="Header">
            <ul className="NavbarList">
                <li><a href="index">Map</a></li>
                <li><a href="Information">Informasjon</a></li>
                <li><a href="Contact">Kontakt</a></li>
            </ul>
        </div>
    }
}

export default HeaderComponent;