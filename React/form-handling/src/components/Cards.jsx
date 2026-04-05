import React from 'react'
import Card from './Card'

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2">
      {users.map((item, index) => (
        <Card 
          key={index}
          user={item}   
          id={index}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default Cards;