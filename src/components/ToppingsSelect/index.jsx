import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [toppingsList, setToppingsList] = useState(toppings);
  const [toppingsPrice, setPrice] = useState(0);
  const [toppingsCount, setCount] = useState(0);

  const handleSelectedToppingsChange = (index) => {
    const newToppings = [...toppingsList];
    newToppings[index].selected = !newToppings[index].selected;
    setToppingsList(newToppings);
    calculate(toppingsList);
  };

  const calculate = (toppingsList) => {
    let toppingsPrice = 0;
    let toppingsCount = 0;
    toppingsList.forEach((topping) =>
      topping.selected
        ? (toppingsCount += 1) && (toppingsPrice += topping.price)
        : null,
    );
    setPrice(Math.round((toppingsPrice + Number.EPSILON) * 100) / 100);
    setCount(toppingsCount);
  };

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
            onToppingsChange={() => handleSelectedToppingsChange(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
