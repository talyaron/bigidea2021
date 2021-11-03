import React from 'react';
import ReactDOM from 'react-dom';

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myelement = <h1>{text}</h1>;

ReactDOM.render(myelement, document.getElementById('root'));