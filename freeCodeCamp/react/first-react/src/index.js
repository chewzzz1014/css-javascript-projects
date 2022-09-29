import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

// class become clasName (since class is reserved word in JS)
let JSX = (
  <div className="myDiv">
    {/* This is a comment */}
    <h1>This is a H1</h1>
    <hr />
    <p>P</p>
    <ul>
      <li>LI</li>
      <li>LI</li>
      <li>LI</li>
    </ul>

    {/* always close sing tag like this */}
    <hr />

  </div>
);


// another way to create component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
};

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */}
        <Fruits />
        { /* Change code above this line */}
      </div>
    );
  }
};


// JSX must return one element only. Parent element wrap all other levels of nested elements
root.render(
  <TypesOfFood />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/////////////////////////////////////////////////////////
// Pass Props to Stateless Functional Component  (CurrentDate in this case) which's passed from Stateless Component (Calender)
/////////////////////////////////////////////////////////

const CurrentDate = (props) => {
  return (
    <div>
      {/* put value within {} */}
      <p>The current date is: {props.date} </p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};

// default props
CurrentDate.defaultProps = { date: Date(2002, 10, 14) };
// type-checking of props received
// CurrentDate.propTypes = { date: PropTypes.date.isRequired };



/////////////////////////////////////////////////////////
// Stateful Component
/////////////////////////////////////////////////////////

// create state in React component by declaring state property in constructor
// can update it, render it in your UI, and pass it as props to child components. The state object can be as complex or as simple as you need it to be.

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "zzz",
    }
    // or 
    this.setState({
      lastName: "chew"
    });

  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

////////////////////////////////////////////////////////
// setState when click button
/////////////////////////////////////////////////////////

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // bind handleClick's this to MyComponent's this
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};



////////////////////////////////////////////////////////
// setState when click button using the previous state value
/////////////////////////////////////////////////////////

class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState(state => {
      return { visibility: (state.visibility) ? false : true }
    });
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}


////////////////////////////////////////////////////////
// setState when click button using the previous state value
/////////////////////////////////////////////////////////

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState(state => {
      return { count: state.count + 1 }
    });
  }

  decrement() {
    this.setState(state => {
      return { count: state.count - 1 }
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};