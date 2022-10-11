import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createStore } from "redux";

const container = document.getElementById('root');
const root = createRoot(container);

const reducer = (state = 5) => {
  return state;
}

// redux store
let store = createStore((state = 5) => state);
let currentState = store.getState();

// redux action
const action = {
  type: "LOGIN"
};
// action creator 
function actionCreator() {
  return action;
}
// dispatch action to redux store and pass value returned from action creator will send action back to store
// both will work
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });

// handling action in store
// reducer will respond to action (After an action is created and dispatched)
//  takes state and action as arguments, and it always returns a new state
// state is read-only. reducer function must always return a new copy of state and never modify state directly. 
const myReducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type === "LOGIN")
    return { login: true }
  else
    return state
  // Change code above this line
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { authenticated: true };
    case "LOGOUT":
      return { authenticated: false };
    default:
      return state;
  }
};

// store listener: to subscribe listener functions to the store, which are called whenever an action is dispatched against the store
store.subscribe((count) => count++);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
