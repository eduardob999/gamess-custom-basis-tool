import React, { useEffect } from 'react';

const FilteredElements = ({ elements, exportedText, onUpdateFilteredData }) => {
  useEffect(() => {
    // Convert the exportedText and element names to lowercase for case-insensitive matching
    const searchTextLower = exportedText.toLowerCase();

    // Filter elements based on whether their names are found anywhere in exportedText
    const filteredElements = elements.filter((element) =>
      searchTextLower.includes(element.name.toLowerCase())
    );

    // Create an updated periodicTableData with only the found elements
    const updatedPeriodicTableData = {
      elements: filteredElements,
    };

    // Call the callback function to update the data in App.js
    onUpdateFilteredData(updatedPeriodicTableData);
  }, [elements, exportedText, onUpdateFilteredData]);

  return (
    <div>
      <h2>Filtered Elements</h2>
      <ul>
        {elements.map((element) => (
          <li key={element.name}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredElements;
