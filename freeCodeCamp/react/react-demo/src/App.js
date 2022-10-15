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
      <Tweet name="chewzzz" />
      <Tweet name="Dokki" />
      <Tweet name="huhuMonster" />
      <Tweet name="weeew" />
      <Tweet name="mmmum" />
    </div>
  );
}

// export this file
export default App;