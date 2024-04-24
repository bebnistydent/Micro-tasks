import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Fullinput } from './components/Fullinput';


function App() {
let [message, setMessage] = useState ([
  {message: "message1"},
  {message: "message2"},
  {message: "message3"},
]);


  return (
    <div className="App">
      
      <Fullinput />

       {message.map((el,index)=>{
        return(
          <div key={index}>{el.message}</div>
        )
       })}

      
    </div>
  );
}

export default App;
