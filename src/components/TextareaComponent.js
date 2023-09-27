import React, { useState } from 'react';

function TextareaComponent({ onTextChange }) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText); // Call the parent component's callback with the new text
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here"
      />
    </div>
  );
}

export default TextareaComponent;
