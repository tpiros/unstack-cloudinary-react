import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

function ImageTransform() {
  return (
    <>
      <h1>Image Transformation</h1>
      {/* Displaying the image with overlays */}
      <Image cloudName="tamas-demo" publicId="woman.jpg">
        <Transformation width="300" height="400" gravity="face" crop="thumb" />
        <Transformation radius="20" border="2px_solid_black" />
        <Transformation
          overlay="unstack_logo"
          opacity="75"
          width="0.25"
          flags="relative"
          gravity="south_east"
          y="10"
          x="10"
        />
      </Image>
      {/* Text Overlay */}
      <Image cloudName="tamas-demo" publicId="woman.jpg">
        <Transformation width="600" height="400" radius="50" />
        <Transformation
          overlay={{
            fontFamily: 'Bangers',
            fontSize: 100,
            fontWeight: 'bold',
            text: "Don't Worry, Be Happy!",
            stroke: 'stroke'
          }}
          border="5px_solid_black"
          color="white"
          gravity="south"
          y="35"
        />
        <Transformation
          effect="shadow:10"
          color="black"
          gravity="south"
          y="35"
          flags="layer_apply"
        />
      </Image>
    </>
  );
}

export default ImageTransform;
