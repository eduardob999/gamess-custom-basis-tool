import React, { useEffect, useState } from 'react';
import "../App.css";

const FilteredElements = ({ elements, exportedText, onUpdateFilteredData }) => {

  // Convert the exportedText and element names to lowercase for case-insensitive matching
  const searchTextLower = exportedText.toLowerCase();

  // Filter elements based on whether their names are found anywhere in exportedText
  const filteredElements = elements.filter((element) =>
    searchTextLower.includes(element.name.toLowerCase())
  );

  // State to hold the updated filteredData
  const [updatedFilteredData, setUpdatedFilteredData] = useState(filteredElements);

  useEffect(() => {
    // Clone the filteredElements to avoid modifying the original data
    const updatedData = [...filteredElements];

    updatedData.forEach((element) => {
      const nameLower = element.name.toLowerCase();
      const basisText = [];

      const textLines = exportedText.split('\n');

      for (let i = 0; i < textLines.length; i++) {
        const line = textLines[i].toLowerCase();

        if (line.includes(nameLower)) {
          // Extract the paragraph right below the element name
          for (let j = i + 1; j < textLines.length; j++) {
            if (textLines[j-1].trim() === '') {
              break; // Stop when an empty line is encountered
            }
            basisText.push(textLines[j].trim());
          }

          // Set the basis property for the element
          element.basis = basisText.join('\n');
        }
      }
    });

    // Update the state with the new data
    setUpdatedFilteredData(updatedData);

    // Pass the updated data to the parent component (App.js)
    onUpdateFilteredData(updatedData);
  }, [elements, exportedText, onUpdateFilteredData]);

  return (
    <div className='SubApp'>
      <h2> {filteredElements.length === 0 ? 'Not a valid basis set yet.' : 'Elements found: '} </h2>
      <ul>
        {filteredElements.map((element) => (
          <li key={element.name}>{element.name}</li>
        ))}
      </ul>
    </div> 
  );
};

export default FilteredElements;
