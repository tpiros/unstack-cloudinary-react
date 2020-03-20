import React, { useState, useEffect, useRef } from 'react';
import { Image, Transformation, Video } from 'cloudinary-react';
import ColourSelect from './colour-select';

function ColourSelectDemo() {
  const [colourTransformation, setColour] = useState('');
  let [colourName, getColour] = useState('');

  let [imgsrc, setImgsrc] = useState('');
  const imageRef = useRef(null);

  useEffect(() => {
    setImgsrc(() => imageRef.current.element.src);
    if (imageRef.current && imageRef.current.element) {
      const observer = new MutationObserver(muts => {
        muts.forEach(m => {
          if (m.type === 'attributes' && m.attributeName === 'src') {
            setImgsrc(() => m.target.src);
          }
        });
      });

      observer.observe(imageRef.current.element, {
        attributes: true
      });
    }
  }, [imgsrc]);

  return (
    <>
      <h1>Colour Select Demo</h1>
      <ColourSelect
        changeColour={setColour}
        getColourName={getColour}
        original="d79025"
      />
      <Image
        ref={imageRef}
        cloudName="tamas-demo"
        publicId="jamstack-training/winter-jumper"
        width="300"
        crop="scale"
        fetchFormat="auto"
        quality="auto"
        secure="true"
      >
        <Transformation rawTransformation={colourTransformation} />
      </Image>
    </>
  );
}

export default ColourSelectDemo;
