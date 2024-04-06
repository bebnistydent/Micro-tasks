import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MouseEvent, MouseEventHandler } from 'react';
import { Button } from './components/button/Button';

function App() {
  
  // const myFirstsubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log("I'm GAY")
  // }

  // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log("Im iron maaaaaaaan")
  // }


// const onClickHandler = (name: string) => {
//   console.log(name)
// }
{/* <button onClick={(event: MouseEvent<HTMLButtonElement>)=> onClickHandler('Yasya')}>MyYouTybeChanel-1</button>

<button onClick={(event: MouseEvent<HTMLButtonElement>)=>onClickHandler('Petya')}>MyYouTybeChanel-2</button> */}
const Buttonfoo1 = (subscriber: string, age:number) => {
  console.log(subscriber, age)
}

const Buttonfoo2 = (subscriber: string, age:number) => {
    console.log(subscriber, age)
}

const Buttonfoo3 = () => {
  console.log("i'm stupid button")
}

return (
            
  <div className= {'App'}>

<Button name = {"MyYotubeChanel-1"} callBack={()=>Buttonfoo1("i'm pareniok",19)}/>
<Button name = {"MyYotubeChanel-2"} callBack={()=>Buttonfoo2("i'm Natasha",22)} />
<Button name = {"MyYotubeChanel-3"} callBack={()=>Buttonfoo3()} />

      
    
  </div>
  
    );
    }
export default App;
