import React, { useState } from 'react';
import { Counter } from './Counter';
import { Card } from './Card';

export const CounterContainer = () => {
  const [count, seCount] = useState(0);

  return (
    <div className="container">
      <Counter min={0} max={50} value={count} onChange={seCount} />

      <div className="wrap">
        {new Array(count).fill(1).map((_, index) => (
          <Card key={index} label={index + 1} />
        ))}
      </div>
    </div>
  );
};
