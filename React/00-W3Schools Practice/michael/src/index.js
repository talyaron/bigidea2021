import React from 'react';
import ReactDOM from 'react-dom';

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));