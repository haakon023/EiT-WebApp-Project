import React from "react";
import {Link} from 'react-router-dom';

class PageTwo extends React.Component
{
    render(){
        return (
            <main style={{ padding: "1rem 0" }}>
                <h2>PageTwo</h2>
                <Link to="/">One!</Link>
            </main>
        );
    }
}

export default PageTwo;