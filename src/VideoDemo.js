import React from 'react';
import { Video } from 'cloudinary-react';
import useScreenOrientation from './orientationChange';

function VideoDisplay() {
  const orientation = useScreenOrientation();
  return (
    <>
      <h1>Video Display</h1>
      <Video
        controls
        cloudName="demo"
        publicId="dog_orig_qflwce"
        width="600"
      ></Video>
      {/* Now in portrait */}
      <Video
        controls
        cloudName="demo"
        publicId="dog_orig_qflwce"
        height="400"
        width="244"
        crop="fill"
      ></Video>
      <Video
        controls
        cloudName="demo"
        publicId="dog_orig_qflwce"
        height="400"
        width="244"
        crop="fill"
        gravity="auto"
      ></Video>
      {orientation === 'portrait-primary' ? (
        <Video
          controls
          cloudName="demo"
          publicId="dog_orig_qflwce"
          height="400"
          width="244"
          crop="fill"
          gravity="auto"
        ></Video>
      ) : (
        <Video
          controls
          cloudName="demo"
          publicId="dog_orig_qflwce"
          width="600"
        ></Video>
      )}
    </>
  );
}

export default VideoDisplay;
