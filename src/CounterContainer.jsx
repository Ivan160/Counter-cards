import React from 'react';
import { Counter } from './Counter';
import { Card } from './Card';

export const CounterContainer = () => {

  return (
    <div className="container">
      <Counter />

      <Card />
    </div>
  );
};
