// DownloadButton.js

import "../App.css";
import React from 'react';

function DownloadButton({ textToDownload }) {
  const handleDownload = () => {
    const blob = new Blob([textToDownload], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'updated_exported_text.txt';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="SubApp">
      <button onClick={handleDownload}>Download Updated Text</button>
    </div>
  );
}

export default DownloadButton;
