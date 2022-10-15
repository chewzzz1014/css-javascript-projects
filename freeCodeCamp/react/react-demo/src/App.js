import React from 'react';
import Hello from './sayHello';
import Tweet from './tweet';
// for styling
import './App.css';


// component
function App() {
  return (
    <div className='app'>
      {/* <h1>This is an App Component</h1>
      <Hello /> */}
      <Tweet name="chewzzz" msg="first post! so excitedddddd" />
      <Tweet name="Dokki" msg="so am I!!!!!!" />
      <Tweet name="huhuMonster" msg="wow first time to see this..." />
      <Tweet name="weeew" msg="something wrong here" />
      <Tweet name="mmmum" msg="react tweet" />
      <Tweet name="mommyBoi" msg="heyyyyyy mate nice to meet you" />
      <Tweet name="monster" msg="yoyoyyyyyy" />
    </div>
  );
}

// export this file
export default App;