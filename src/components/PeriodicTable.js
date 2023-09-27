import React from 'react';

const PeriodicTable = ({ elements }) => {
  return (
    <div>
      <h2>Periodic Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Atomic Number</th>
          </tr>
        </thead>
        <tbody>
          {elements.map((element) => (
            <tr key={element.name}>
              <td>{element.name}</td>
              <td>{element.symbol}</td>
              <td>{element.atomicNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeriodicTable;
