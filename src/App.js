// github: eduardob999
// Eliminiar Second Text Area

// App.js

import React, { useState } from 'react';
import './App.css';
import TextareaComponent from './components/TextareaComponent';
import FilteredElements from './components/FilteredElements';
import DisplayObjectData from './components/DisplayObjectData';
import AtomicNumberLineSearch from './components/AtomicNumberLineSearch';
import DownloadButton from './components/DownloadButton'; // Import the new component
import periodicTableData from './data/periodicTable.json';

function App() {
  const [exportedText, setExportedText] = useState('');
  const [secondExportedText, setSecondExportedText] = useState('');
  const [filteredData, setFilteredData] = useState(periodicTableData);

  // Component toggle
  const enable = (stage) => {
    switch (stage) {
      case 0:
        return false;
      case 1:
        return exportedText !== ""
      case 2:
        return secondExportedText !== "";
      default:
        console.debug("error 101");
        break;
    }
  }

  const handleTextChange = (newText) => {
    setExportedText(newText);
  };

  const handleSecondTextChange = (newText) => {
    setSecondExportedText(newText);
  };

  const handleUpdatedText = (updatedText) => {
    setSecondExportedText(updatedText);
  };

  return (
    <div className="App">
      <h1>GAMESS-BASIS UI</h1>
      <TextareaComponent 
        key={0}
        prompt= "Paste the basis set: "
        placeHolder="Paste the basis set in GAMESS US format..."
        onTextChange={handleTextChange} 
      />
      {enable(1) && <FilteredElements
        elements={periodicTableData.elements}
        exportedText={exportedText}
        onUpdateFilteredData={setFilteredData}
      />}
      {enable(1) && <TextareaComponent 
        key={1}
        prompt= "Paste the GAMESS input: "
        placeHolder= "Paste the input with no $BASIS group..."
        onTextChange={handleSecondTextChange} 
      />}
      {enable(2) && <AtomicNumberLineSearch
        filteredData={filteredData}
        secondExportedText={secondExportedText}
        onUpdatedText={handleUpdatedText} 
      />}
      {enable(2) && <DownloadButton textToDownload={secondExportedText} /> }
      {enable(0) && <DisplayObjectData data={filteredData} />} 
    </div>
  );
}

export default App;
