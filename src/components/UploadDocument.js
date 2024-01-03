// src/components/UploadDocument.js
import React, { useState } from 'react';

const UploadDocument = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    // Implement file upload logic here
    console.log('File uploaded:', file);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded bg-white">
      <h2 className="text-2xl font-bold mb-6">Upload Document</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadDocument;
