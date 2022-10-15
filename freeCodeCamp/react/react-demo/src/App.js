import React from 'react';
import Hello from './sayHello';
import Tweet from './tweet';

// component
function App() {
  return (
    <div>
      <h1>This is an App Component</h1>
      <Hello />
      <Tweet />
    </div>
  );
}

// export this file
export default App;