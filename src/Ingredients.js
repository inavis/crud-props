import * as React from 'react';
import { Steps } from './Steps';

//to display ingredients as a list
export function Ingredients({ ingredients }) {
  return (
    <div>
      {ingredients.map((ele) => <Steps content={ele} />)}
    </div>
  );
}
