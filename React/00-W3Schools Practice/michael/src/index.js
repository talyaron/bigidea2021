import React from 'react';
import ReactDOM from 'react-dom';

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi', 'Honda'];
ReactDOM.render(
  <Garage cars={cars} />,
  document.getElementById('root')
);