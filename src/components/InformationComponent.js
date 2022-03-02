import React, { userEffect, useRef } from "react";
import ReactDOM from 'react-dom'
import { MapContainer, useMap, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import data from "../LocationData.json";

const position = [63.4270, 10.4041];
const pos2 = [63.4270, 10.4041];
const pos3 = [63.4270, 10.4060];


class InformationComponent extends React.Component
{
    
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return ( <div className="Body">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                               
               <GetMarkerData></GetMarkerData>
            </MapContainer>
        </div>);
    }
}

function GetMarkerData()
{
    var map = useMap();
    data.map(loc => {
        console.log(loc.gps);
        L.marker([loc.gps.latitude, loc.gps.longitude]).addTo(map);
    })
    return null
}


export default InformationComponent;