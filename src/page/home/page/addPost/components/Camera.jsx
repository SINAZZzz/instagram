import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { Button , Box } from '@mui/material';

const CameraComponent: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    // Do something with the captured image, like sending it to a server or displaying it in the UI
    console.log(imageSrc);
  };

  return (
    <Box component='div' display='flex' flexDirection='column' py='2rem'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <Button variant="contained" color="primary" onClick={capture}>
        Capture Photo
      </Button>
    </Box>
  );
};

export default CameraComponent;
