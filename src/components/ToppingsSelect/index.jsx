import React from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({
  toppings,
  toppingsCount,
  toppingsPrice,
  onToppingsChange,
}) => {
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {toppingsCount}, total price: {toppingsPrice} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onToppingsChange={() => onToppingsChange(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
