import React from 'react';
import Card from './Card';

const CardList = ({ bills }) => {
  return (
    <div>
      {
        bills.map((user, i) => {
          return (
            <Card
              key={i}
              id={bills[i].id}
              name={bills[i].name}
              email={bills[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
