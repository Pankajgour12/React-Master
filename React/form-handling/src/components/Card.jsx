import React from "react";

const Card = ({ user, handleRemove, id }) => {
  return (
    <div className="bg-zinc-100/50 h-60 rounded-lg flex flex-col items-center justify-center p-4 shadow-md">
      
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img src={user.image} alt="" className="w-full h-full object-cover" />
      </div>

      <h1 className="mt-1 text-xl font-semibold">{user.name}</h1>
      <h2 className="opacity-60 text-sm">@{user.email}</h2>

      <p className="mt-1 text-center text-xs font-semibold leading-tight tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <button 
        onClick={() => handleRemove(id)} 
        className="mt-2 px-3 py-1 bg-red-600 text-xs rounded-md font-semibold"
      >
        Remove
      </button>

    </div>
  );
};

export default Card;