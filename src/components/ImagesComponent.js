import React from "react";
import { Outlet } from 'react-router-dom';

class ImagesComponent extends React.Component
{
    render(){
        return (
            <main style={{ padding: "1rem 0" }}>
                <h2>Here are all the images!</h2>
                <h2>Some List?</h2>
                <Outlet/>
            </main>
        );
    }
}


export default ImagesComponent;