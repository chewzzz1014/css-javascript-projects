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
      { /* Change code below this line */}
      <TypesOfFruit />
      { /* Change code above this line */}
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
// Pass Props to Stateless Functional Component (CurrentDate in this case)
/////////////////////////////////////////////////////////

const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */}
      <p>The current date is: {props.date} </p>
      { /* Change code above this line */}
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
        { /* Change code below this line */}
        <CurrentDate date={Date()} />
        { /* Change code above this line */}
      </div>
    );
  }
};

// default props
CurrentDate.defaultProps = { date: 13 };