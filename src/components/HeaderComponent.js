import React from "react";
import {Link} from 'react-router-dom';

class HeaderComponent extends React.Component
{

    render(){
        return <div className="Header">
            <ul className="NavbarList">
                <Link to="/"><li><a href="index">Map</a></li></Link>
                <Link to="/information"><li><a href="Information">Informasjon</a></li></Link>
                <Link to="/contact"><li><a href="Contact">Kontakt</a></li></Link>
            </ul>
        </div>
    }
}

export default HeaderComponent;