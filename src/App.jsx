import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg'; // Fixed the path for viteLogo
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(''); // Added state for text input
  const [list, setList] = useState(["ready", "set", "GO"]); // Added state for todo list

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setList((prevList) => [...prevList, text]);
    setText('');
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>React is so cool!</p>
        <h1>Hello React!</h1>
        <p>Learning React is exciting!</p>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={text}
            onChange={onChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
