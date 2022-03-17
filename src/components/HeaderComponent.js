import React from "react";
import {Link} from 'react-router-dom';

class HeaderComponent extends React.Component
{

    render(){
        return <div className="Header">
            <ul className="NavbarList">
                <Link to="/"><li>Map</li></Link>
                <Link to="/information"><li>Information</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    }
}

export default HeaderComponent;