import * as React from 'react';
import { Steps } from './Steps';

//to display receipe as list
export function Receipedisplay({ receipe }) {
  return (
    <div>
      {receipe.map((ele) => <Steps content={ele} />)}
    </div>
  );
}
