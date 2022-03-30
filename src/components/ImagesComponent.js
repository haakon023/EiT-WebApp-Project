import React from "react";
import { Carousel } from 'react-carousel-minimal';
import { useParams } from "react-router";
import imagesData from '../ImageData.json'
import locationDataJson from '../LocationData.json'

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}

export default function ImagesComponent(){
  let params = useParams();
  
  let locationData = Object.values(locationDataJson)[params.imageId];
  let data = getImages(locationData);

  return ( 
    <>
      <Carousel
          data={data}
          captionStyle={captionStyle}
          slideNumber={true}
          captionPosition="bottom"  
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          width= "100vw"
          height= "100vh"
          style={{
              textAlign: "center",
              maxWidth: "100vw",
              maxHeight: "100vh"
          }}
      />
      {
        data.map( (image) => {
          if(!image.title || !image.text)
            return;
          return (
            <div className="image-content" key={image.id}>
              <h3>{image.title}</h3>
              <p>{image.text}</p>
            </div>
          )
        })
      }
    </>
  );
}

function getImages(locationData)
{
  let data = [];
  let loactionDataImages = [];
  if(locationData.images == null)
    return data;
  loactionDataImages = Object.values(locationData.images); 
  for(let i = 0; i < loactionDataImages.length; i++)
  {
    data.push(
      {
        caption : Object.values(imagesData)[Object.values(loactionDataImages)[i]].caption,
        image : Object.values(imagesData)[Object.values(loactionDataImages)[i]].image,
        title : Object.values(imagesData)[Object.values(loactionDataImages)[i]].imageTitle,
        text : Object.values(imagesData)[Object.values(loactionDataImages)[i]].imageText,
        id : Object.values(imagesData)[Object.values(loactionDataImages)[i]].id
      }
    )
  }
  return data;
}