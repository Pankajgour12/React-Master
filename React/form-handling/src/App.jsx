import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers((prev) => [...prev, data]);
  };

  const handleRemove = (id) => {
    setUsers((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <div className="w-full h-screen bg-stone-500 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl h-[80vh]  rounded-lg p-4 flex flex-col">
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App;
