import React from "react";

const Card = ({ song, handleClick, index }) => {
  const { songName, artistName, image, added } = song;

  
  return (
    <div className="relative w-72 h-50 p-4 m-4  bg-stone-600 rounded-xl flex gap-3">
      <div className="w-32 h-32 rounded-2xl">
        <img
          src={image}
          className="w-full h-full rounded-xl object-cover overflow-hidden"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-top items-start gap-2">
        <h1 className="text-2xl font-semibold">{songName}</h1>
        <p className="text-sm text-white font-semibold">{artistName}</p>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`absolute w-40 h-10 flex items-center justify-center font-semibold ${added? "bg-emerald-500" : "bg-orange-500"} left-1/2 bottom-2 rounded-md text-black -translate-x-1/2 whitespace-nowrap overflow-hidden text-ellipsis`}
      >
        {added ? "Added Successfully" : "Add to fav."}
      </button>
    </div>
  );
};

export default Card;
