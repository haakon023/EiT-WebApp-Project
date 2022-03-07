import React from "react";
import { useParams } from 'react-router-dom';
import { getInvoices } from "../data";


export default function ImageComponent(){
    let params = useParams();

    let invoice_element = getInvoices().at(1);

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Image id: {params.imageId}</h2>
            <h2>Image!</h2>
            <h2>Some Information</h2>
            <h2>{invoice_element.name}</h2>         
            <img src={require("../nidaros.jpg")} style={{width: "60vw"}}/>
        </main>
    );
}

