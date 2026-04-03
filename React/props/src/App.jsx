import React, { useState } from 'react'
import './App.css'
import Card from './props/Card'

const App = () => {

 const peopleData = [
  {
    name: "Aarav Sharma",
    profession: "Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    friend:false
  },
  {
    name: "Meera Verma",
    profession: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    friend:false
  },
  {
    name: "Kabir Singh",
    profession: "Photographer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    friend:false
  },
  {
    name: "Ananya Gupta",
    profession: "Doctor",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    friend:false
    
  },
  {
    name: "Rohan Das",
    profession: "Content Writer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    friend:false
  }
];

const [people, setPeople] = useState(peopleData)

const handleFriend = (clickIndex) => {
  setPeople((prev) => {
    return prev.map((item, index) => {
      if (index === clickIndex) {

        // 🔥 yahin alert lagana hai
        if (!item.friend) {
          alert(`${item.name} is now your friend`);
        }

        return { ...item, friend: !item.friend };
      }

      return item;
    });
  });
};

return (
  <div className='bg-stone-900 min-h-screen text-amber-100 flex items-center flex-wrap gap-6 p-6 justify-center'>
    
    {people.map((person, index) => (
      <Card 
        key={index} 
        person={person} 
        handleFriend={handleFriend} 
        index={index} 
      />
    ))}

  </div>
)

 
}

export default App