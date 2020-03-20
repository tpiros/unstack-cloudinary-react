import React from 'react';
import { Image } from 'cloudinary-react';

function ImageDisplay() {
  return (
    <>
      <h1>Cloudinary Image</h1>
      {/* Displaying the full image */}
      <Image cloudName="tamas-demo" publicId="woman.jpg" />
    </>
  );
}

export default ImageDisplay;
