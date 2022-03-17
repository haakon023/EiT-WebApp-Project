import React from "react";
import { useParams } from 'react-router-dom';


export default function ImageComponent(){
    let params = useParams();
   

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Image id: {params.imageId}</h2>
           
        </main>
    );
}

