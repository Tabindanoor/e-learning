// ErrorModal.js
import React from 'react';

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-red-500 text-white p-4 rounded">
        <p>{message}</p>
        <button
          className="mt-2 bg-white text-red-500 px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
