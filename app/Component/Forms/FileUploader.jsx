// FileUploader.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt } from "react-icons/fa";

const FileUploader = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    onFileUpload(acceptedFiles);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*', // Specify the file types you want to accept
  });

  return (
    <div {...getRootProps()} className=" border-dashed border-2 p-4 text-center">
      <input {...getInputProps()} />
      <div className='flex justify-center '>
      <FaCloudUploadAlt size={95} className='border-dashed border-2 rounded-full w-[fit-cotent] p-6'/>
      </div>
      <p className="text-center">Drag &amp; drop files here, it should be excel file</p>
    </div>
  );
};

export default FileUploader;
