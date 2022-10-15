import React, { useState } from 'react';
import Hello from './sayHello';
import Tweet from './tweet';
// for styling
import './App.css';


// component
function App() {

  // // state
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);

  //   // toggle isRed
  //   setRed(!isRed);

  const [users, setUsers] = useState([
    { name: "chewzzz", msg: "first post! so excitedddddd" },
    { name: "Dokki", msg: "so am I!!!!!!" },
    { name: "huhuMonster", msg: "wow first time to see this..." },
    { name: "weeew", msg: "something wrong here" },
    { name: "mmmum", msg: "react tweet" },
    { name: "mommyBoi", msg: "heyyyyyy mate nice to meet you" },
    { name: "monster", msg: "yoyoyyyyyy" },
    { name: "maggiLover", msg: "I'm hungry......" },
  ]);


  return (
    <div className='app'>
      {/* <h1>This is an App Component</h1>
      <Hello /> */}
      {/* <Tweet name="chewzzz" msg="first post! so excitedddddd" />
      <Tweet name="Dokki" msg="so am I!!!!!!" />
      <Tweet name="huhuMonster" msg="wow first time to see this..." />
      <Tweet name="weeew" msg="something wrong here" />
      <Tweet name="mmmum" msg="react tweet" />
      <Tweet name="mommyBoi" msg="heyyyyyy mate nice to meet you" />
      <Tweet name="monster" msg="yoyoyyyyyy" /> */}


      {
        users.map(user =>
          <Tweet {...user} />)
      }

      {/* <h1 className={isRed ? 'red' : ''}>Change My Color</h1>
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1> */}
    </div>
  );
}

// export this file
export default App;