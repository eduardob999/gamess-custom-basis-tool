import React, { useState } from 'react';
import TextareaComponent from './components/TextareaComponent';
import FilteredElements from './components/FilteredElements'; // Include the FilteredElements component
import DisplayObjectData from './components/DisplayObjectData'; // Import the DisplayObjectData component
import periodicTableData from './data/periodicTable.json';

function App() {
  const [exportedText, setExportedText] = useState('');
  const [filteredData, setFilteredData] = useState(periodicTableData); // Initialize with the full data

  const handleTextChange = (newText) => {
    setExportedText(newText);
  };

  return (
    <div className="App">
      <h1>Textarea Export App</h1>
      <TextareaComponent onTextChange={handleTextChange} />
      <div>
        <h2>Exported Text:</h2>
        <p>{exportedText}</p>
      </div>
      {/* Include the FilteredElements component */}
      <FilteredElements
        elements={periodicTableData.elements}
        exportedText={exportedText}
        onUpdateFilteredData={setFilteredData}
      />
      {/* Display the updated periodic table data */}
      <DisplayObjectData data={filteredData} /> {/* DisplayObjectData component */}
    </div>
  );
}

export default App;
