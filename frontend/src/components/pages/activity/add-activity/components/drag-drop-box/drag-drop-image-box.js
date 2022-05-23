import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import './drag-drop-image-box.css';
const fileTypes = ["JPG", "PNG"];


const DragDrop = () => {
  const [file, setFile] = useState(null);
  const uploadFile = (file) => {
    console.log(file)
    setFile(file);
  };
  return (
    <div>
      
      <FileUploader handleChange={uploadFile} name="file" types={fileTypes} children={<div className="image-dropbox"><p>Drag or drop your image here</p></div>} />
      {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
    </div>
  );
}

export default DragDrop;