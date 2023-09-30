import React, { useState } from 'react';
import "../App.css";

function TextareaComponent({ onTextChange, placeHolder, prompt }) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText); // Call the parent component's callback with the new text
  };

  return (
    <div className='SubApp'>
      <h2>{prompt}</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder={placeHolder}
      />
    </div>
  );
}

export default TextareaComponent;
