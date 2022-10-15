import React from 'react';
// for stylinh
import './App.css';

function Tweet(props) {
    return (
        <div className='tweet'>
            <h3>{props.name}</h3>
            <p>{props.msg}</p>
            <h3>Number of likes</h3>
        </div>
    )
}



export default Tweet;