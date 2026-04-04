import React from "react";

const Card = () => {
  return (
    <div className="w-52 bg-zinc-100 rounded-lg flex flex-col items-center justify-center p-4">
        <div className="image w-16 h-16 rounded-full bg-zinc-200 overflow-hidden">
          {/* <img src="w-full h-full object-cover" alt="" /> */}
        </div>
        <h1 className="mt-1 text-xl font-semibold">Pankaj</h1>
        <h2 className="opacity-60 text-sm ">@pankaj</h2>
       <p className="mt-1 text-center text-xs font-semibold leading-tight tracking-tight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, minus.</p>
        <button className="mt-2 px-3 py-1 bg-red-600 text-xs rounded-md font-semibold">Remove</button>

    </div>
  );
};

export default Card;
