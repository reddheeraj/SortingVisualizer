import './App.css';
import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Button from './SortingVisualizer/Button';

function App() {
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
      <Button></Button>
    </div>
  );
}

export default App;
