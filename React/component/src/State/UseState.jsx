import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const [val, setVal] = useState({
    name: "Pankaj",
    isBanned: false,
  });

  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  /*  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  } */ return (
    <div
      className="min-h-screen w-full
    flex flex-col justify-center items-center bg-stone-900 gap-5
    "
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-5xl text-amber-50">{count}</h1>
        <button
          className="px-4 py-2 bg-sky-300 rounded-2xl text-sm shadow "
          onClick={() => setCount((prev) => prev + 1)}
        >
          Incress Value
        </button>

        <button
          className="px-4 py-2 bg-sky-300 rounded-2xl text-sm shadow "
          onClick={() => setCount((prev) => prev - 1)}
        >
          decress Value
        </button>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-5xl text-amber-50"> Name : {val.name}</h1>
        <h1 className="text-3xl text-amber-50">
          {" "}
          Is Banned :{" "}
          <span
            className={`text-xl text-amber-50 ${val.isBanned ? "text-red-500" : "text-green-500"}`}
          >
            {val.isBanned.toString()}
          </span>
        </h1>

        <button
          onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
          className={`px-4 py-2 text-center  rounded-2xl shadow ${val.isBanned ? "bg-red-400" : "bg-green-400"} text-black `}
        >
          {" "}
          Change{" "}
        </button>
        
      </div>

      <div className="bg-gray-100 px-2 flex  justify-center items-center gap-3 text-black">
        {data.map((item, i) => (
          <h1 key={i} className="text-xl">
            {item}
          </h1>
        ))}
      </div>

      <button
        onClick={() =>
          setData(() => data.filter((i, inx) => inx != data.length - 1))
        }
        className="px-2 py-1 bg-green-300 rounded-full text-green-600"
      >
        delete items
      </button>

      <button
        onClick={() => setData([...data, `${data.length + 1}`])}
        className="px-2 py-1 bg-blue-300 rounded-full text-blue-700"
      >
        Add Item
      </button>

      {/* TEXT COUNTER */}
      {/*  <div className=" flex flex-col justify-center items-center gap-4 bg-gray-100 text-white">
      
     
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        className="px-4 py-2 rounded-lg text-black outline-none"
      />

      
      <h1 className="text-2xl text-emerald-500 font-bold">
        {text ? text : "Type something..."}
      </h1>

        <p className="text-sm text-gray-800">
        Characters: {text.length}
      </p>

    </div> */}
    </div>
  );
};

export default UseState;
