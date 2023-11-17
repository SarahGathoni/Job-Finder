import React from 'react';
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

function FileInput() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Here, you can access the file data as reader.result
        console.log('File content:', reader.result);
        // You can also send the file to a server using fetch or other methods.
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      <div className="file-input">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>
        
        
      </button>
    </div>
    </div>
  );
}

export default FileInput;
