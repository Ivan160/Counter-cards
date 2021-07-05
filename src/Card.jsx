import React from 'react';

export const Card = React.memo((props) => {
  const { label  } = props;

  console.log('card', label);

  return (
    <div className="card">
      <h2>card {label}</h2>
    </div>
  );
});
