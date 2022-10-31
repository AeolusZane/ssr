import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDarkMode, changeTheme } from './theme';



function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useDarkMode();
  let set = () => setDarkMode((darkMode) => changeTheme(darkMode));

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+10);
    },2000)
  })

  return (
    <div className="App transition duration-700 bg-white text-black dark:text-white dark:bg-[#282c34] ">
      <header className="App-header trans">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='text-black dark:text-white'>{count}</div>
        <p className='text-black dark:text-white' onClick={() => { setCount(i => i + 1) }}>Increment</p>
        <p className='text-black dark:text-white' onClick={set}>changeTheme</p>
      </header>
    </div>
  );
}

export default App;
