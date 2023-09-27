import React, { useState } from 'react';
import TextareaComponent from './components/TextareaComponent';
import PeriodicTable from './components/PeriodicTable';
import FilteredElements from './components/FilteredElements';
import DisplayObjectData from './components/DisplayObjectData'; // Import the DisplayObjectData component
import periodicTableData from './data/periodicTable.json';

function App() {
  const [exportedText, setExportedText] = useState('');
  const [filteredData, setFilteredData] = useState(periodicTableData); // Initialize with the full data

  const handleTextChange = (newText) => {
    setExportedText(newText);
  };

  // Callback function to update the filtered data
  const onUpdateFilteredData = (updatedData) => {
    setFilteredData(updatedData);
  };

  return (
    <div className="App">
      <h1>Textarea Export App</h1>
      <TextareaComponent onTextChange={handleTextChange} />
      <div>
        <h2>Exported Text:</h2>
        <p>{exportedText}</p>
      </div>
      <PeriodicTable elements={periodicTableData.elements} />
      <FilteredElements
        elements={periodicTableData.elements}
        exportedText={exportedText}
        onUpdateFilteredData={onUpdateFilteredData}
      />
      {/* Display the updated periodic table data */}
      <DisplayObjectData data={filteredData} />
    </div>
  );
}

export default App;
