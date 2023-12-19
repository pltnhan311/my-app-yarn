import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import BareInput from './BareInput';
import Layout from "./Layout";
import BareButton from './BareButton';

function App() {
  const [name, setName] = useState('Nvidia')
  const [visible, setVisible] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setName("AMD")}>Change name</button>
      <button onClick={() => setVisible(false)}>Hide Clock Component</button>
      {visible && <Clock name={name} />}
      <Layout>
        <h1>Hello from Layout</h1>
        <BareInput
          type="text"
          value='This is text'
          autoFocus
          className="input-control"
          onChange={() => {}}
        />
        <BareButton/>
      </Layout>
    </div>
  );
}

export default App;
