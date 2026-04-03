import "./App.css";
import Card from "./props/Card";

function App() {
  return (
    <div>
      <div className="min-h-screen flex justify-center bg-stone-800 items-center flex-col gap-10 text-stone-300">
        <h1 className="text-5xl ">This is props</h1>

        <div className="flex gap-3">
          <Card  text="Download Now" color="bg-blue-300" />
          <Card text="Know more" color="bg-red-400"  />
        </div>
      </div>
    </div>
  );
}

export default App;
