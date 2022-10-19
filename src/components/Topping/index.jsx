import React from 'react';
import Check from '../Check';
import './style.css';

const Topping = ({ topping, onToppingsChange }) => {
  return (
    <div className="topping">
      <Check
        checked={topping.selected}
        vegan={topping.vegan}
        onChange={onToppingsChange}
      />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
