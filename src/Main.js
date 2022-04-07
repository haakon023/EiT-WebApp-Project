import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import InformationComponent from './components/InformationComponent';
import ContactComponent from './components/ContactComponent';
import MapComponent from './components/MapComponent';
import ImagesComponent from './components/ImagesComponent';

const Main = () => {
  return (
    <Routes>
        <Route path="/" element={<MapComponent/>}/>
        <Route path="/information" element={<InformationComponent/>}/>
        <Route path="/contact" element={<ContactComponent/>}/>
        <Route path="/images/:imageId" element={<ImagesComponent/>}/>
        <Route
            path="*"
            element={
                <main>
                <p>There's nothing here!</p>
                </main>
            }
            />
    </Routes>
  );
}

export default Main;