import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider, provider } from 'react-redux';

// store: to keep all the states
// action: describes what we want to do
// reducer: describes how action transform the state
// dispatch: execute action




// // action
// const increment = () => {
//   return {
//     type: "INCREMENT",

//   }
// }

// const decrement = () => {
//   return {
//     type: "DECREMENT",

//   }
// }

// // reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }

// // store
// let store = createStore(counter);

// // describe store
// store.subscribe(() => console.log(store.getState()));

// // dispatch action
// store.dispatch(increment());


// 2 reducers combined
const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
