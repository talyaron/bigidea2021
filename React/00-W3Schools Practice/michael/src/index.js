import React from 'react';
import ReactDOM from 'react-dom';

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myelement = <h1>{text}</h1>;

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

ReactDOM.render(myelement, document.getElementById('root'));
ReactDOM.render(<Car />, document.getElementById('root'));