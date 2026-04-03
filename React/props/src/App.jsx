import "./App.css";
import Card from "./props/Card";

function App() {
  const peopleData = [
  {
    name: "Aarav Sharma",
    profession: "Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Meera Verma",
    profession: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Kabir Singh",
    profession: "Photographer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Ananya Gupta",
    profession: "Doctor",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
  },
  {
    name: "Rohan Das",
    profession: "Content Writer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  }
];



  return (
    <div>
      <div className="min-h-screen flex justify-center bg-stone-800 items-center flex-col gap-10 text-stone-300">
        <h1 className="text-5xl ">This is props</h1>

        <div className="flex gap-3">
          {peopleData.map((item,index)=>(
            <Card key={index} name={item.name} profession={item.profession} image={item.image}/>
          ))}
          

        </div>
      </div>
    </div>
  );
}

export default App;
