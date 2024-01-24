import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUpload = ({ onFileChange, name }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (onFileChange) {
      onFileChange(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={fileInputRef}
        name={name}
      />
      <Button
        variant="contained"
        component="label"
        fullWidth
        onClick={() => fileInputRef.current.click()}
        startIcon={<CloudUploadIcon />}
        name="File"
      >
        Upload File
      </Button>
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
    </div>
  );
};

export default FileUpload;
