
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

 

  return (
    <div className={"App" + theme}>
      <Counter />

       <select onChange={ event => setTheme(event.target.value) }>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}

export default App;
