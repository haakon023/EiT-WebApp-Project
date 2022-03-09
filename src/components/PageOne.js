import React from "react";
import { Link } from 'react-router-dom';

class PageOne extends React.Component
{
    render(){
        return (
            <main style={{ paddingLeft: "50px", padding: "1rem 0" }}>
                <h2>PageOne</h2>
                <Link to="/two">Two!</Link>
            </main>
        );
    }
}


export default PageOne;