// components/DisplayObjectData.js
import React from 'react';

const DisplayObjectData = ({ data }) => {
  return (
    <div>
      <h2>Object Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DisplayObjectData;
