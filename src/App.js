import React, { useEffect, useState } from 'react';
import './App.css';
import Cell from "./Cell"
const numberOfCells = 25

function App() {

  const [cells, setCells] = useState([])

  useEffect(() => {
    const newCells = []
    for(let i=0; i<numberOfCells; i++) {
      newCells.push(<Cell />)
    }
    setCells(newCells)
  },[])

  return (
    <div className="App">
      {cells}
    </div>
  );
}

export default App;
