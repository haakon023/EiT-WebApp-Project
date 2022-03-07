import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import InformationComponent from './components/InformationComponent';
import ContactComponent from './components/ContactComponent';
import MapComponent from './components/MapComponent';
import ImagesComponent from './components/ImagesComponent';
import ImageComponent from './components/ImageComponent';

const Main = () => {
  return (
    <Routes>
        <Route path="/" element={<MapComponent/>}/>
        <Route path="/information" element={<InformationComponent/>}/>
        <Route path="/contact" element={<ContactComponent/>}/>
        <Route path="/images" element={<ImagesComponent/>}>
            <Route path=":imageId" element={<ImageComponent/>}/>
        </Route>
        <Route
            path="*"
            element={
                <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
                </main>
            }
            />
    </Routes>
  );
}

export default Main;