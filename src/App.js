import { useState } from 'react';
import './App.css';
import Clock from './Clock';

function App() {
  const [name, setName] = useState('Nvidia')
  const [visible, setVisible] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setName('AMD')}>Change name</button>
      <button onClick={() => setVisible(false)}>Hide Clock Component</button>
      {visible && <Clock name={name} />}
    </div>
  );
}

export default App;
