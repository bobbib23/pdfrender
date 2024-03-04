import logo from './logo.svg';
import './App.css';
import Drawercetakan from './pages/drawercetakan';
import Cetakan27 from './pages/cetakan27';
import { useState } from 'react';
import { Button } from 'antd';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}> lihat pdf</Button>
      <Drawercetakan visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
}

export default App;
