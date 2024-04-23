import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let [b,setb] = useState(1);

const onClickHandler = () => {
      setb(++b);
  console.log(b);
};


const onClickHandler2 = () => {
  setb(b = 0);
console.log(b);
};

  

  return (
    <div className="App">
      <h1>{b}</h1>
      <button onClick={onClickHandler}>PlusOne</button>
      <button onClick={onClickHandler2}>Zero</button>

    </div>
  );
}

export default App;
