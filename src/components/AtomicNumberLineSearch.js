// AtomicNumberLineSearch.js

import "../App.css"
import React, { useState } from 'react';

function AtomicNumberLineSearch({ filteredData, secondExportedText, onUpdatedText }) {
  const [foundLines, setFoundLines] = useState([]);

  // Function to search for atomicNumbers in secondExportedText and find the lines they are found in
  const searchAtomicNumbers = () => {
    const atomicNumbers = filteredData.map((element) => element.atomicNumber.toString());
    const lines = secondExportedText.split('\n');
    const foundLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      for (let j = 0; j < atomicNumbers.length; j++) {
        const atomicNumber = atomicNumbers[j];
        if (line.includes(atomicNumber)) {
          foundLines.push({ atomicNumber, lineIndex: i }); // Store the line index
        }
      }
    }

    setFoundLines(foundLines);
  };

  // Function to insert basis paragraphs below the line with the corresponding atomic number
  const insertBasisParagraphs = () => {
    let updatedText = secondExportedText;
    
    foundLines.sort((a, b) => b.lineIndex - a.lineIndex); // Sort by lineIndex in descending order
    
    foundLines.forEach((entry) => {
      const { atomicNumber, lineIndex } = entry;
      const basisParagraph = filteredData.find((element) => element.atomicNumber.toString() === atomicNumber)?.basis;
      
      if (basisParagraph) {
        const lines = updatedText.split('\n');
        lines.splice(lineIndex + 1, 0, basisParagraph);
        updatedText = lines.join('\n');
      }
    });

    onUpdatedText(updatedText);
  };

  return (
    <div className="SubApp">
      <button onClick={searchAtomicNumbers}>Input Check</button>
      <div>
        {foundLines.length > 0 ? (
          <div className="SubApp">
            <h3>Atoms found: </h3>
            <ul>
              {foundLines.map((entry, index) => (
                <li key={index}>
                  Z={entry.atomicNumber}, Line: {entry.lineIndex + 1}
                </li>
              ))}
            </ul>
            <button onClick={insertBasisParagraphs}>Insert Basis</button>
          </div>
        ) : (
          <p>Enter a valid input and press input check.</p>
        )}
      </div>
    </div>
  );
}

export default AtomicNumberLineSearch;
