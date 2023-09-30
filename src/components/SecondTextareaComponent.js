// SecondTextareaComponent.js

import "../App.css";
import React, { useState } from 'react';

function SecondTextareaComponent({ onTextChange }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <div className="SubApp">
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Type something different..."
      />
    </div>
  );
}

export default SecondTextareaComponent;
