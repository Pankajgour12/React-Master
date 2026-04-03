import React from "react";

const Card = ({ person, handleFriend, index }) => {
  const { name, profession, image, friend } = person;

  return (
    <div className="w-64  bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
      
      <div className=" h-56">
        <img
          src={`${image}?w=400&h=400&fit=crop`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <h4 className="text-sm text-amber-300">{profession}</h4>

        <button
          onClick={() => handleFriend(index)}
          className={`mt-3 py-1 rounded-lg text-sm font-semibold transition ${
            friend ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {friend ? "Friend ✓" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};

export default Card;
