import './App.css';
import React, {useState} from 'react';
import Box from './components/Box';
import Form from './components/Form';

function App() {
  const [boxColor, setBoxColor] = useState([]);

  return (
    <div className="App">
      <h1>Box Color Generator</h1>
      <p>Input a color into the form and the output will be a box of your chosen color!</p>

      <Form boxColor={boxColor} setBoxColor={setBoxColor} />
      <Box boxColor={boxColor} />
    </div>
  );
}

export default App;
