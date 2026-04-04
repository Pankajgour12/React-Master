import { useState } from "react";
import "./App.css";
import Card from "./component/Card";
import Navbar from "./component/Navbar";

function App() {
  const songs = [
    {
      songName: "Chaleya",
      artistName: "Arijit Singh",
      image: "https://loremflickr.com/200/200/music,singer?lock=1",
      added: false,
    },
    {
      songName: "Apna Bana Le",
      artistName: "Arijit Singh",
      image: "https://loremflickr.com/200/200/romantic,music?lock=2",
      added: false,
    },
    {
      songName: "Husn",
      artistName: "Anuv Jain",
      image: "https://loremflickr.com/200/200/indie,artist?lock=3",
      added: false,
    },
    {
      songName: "Raataan Lambiyan",
      artistName: "Jubin Nautiyal",
      image: "https://loremflickr.com/200/200/love,concert?lock=4",
      added: false,
    },
    {
      songName: "Choo Lo",
      artistName: "The Local Train",
      image: "https://loremflickr.com/200/200/band,performance?lock=5",
      added: false,
    },
    {
      songName: "Kun Faya Kun",
      artistName: "A.R. Rahman",
      image: "https://loremflickr.com/200/200/sufi,music?lock=6",
      added: false,
    },
    {
      songName: "O Maahi",
      artistName: "Arijit Singh",
      image: "https://loremflickr.com/200/200/romantic,singer?lock=7",
      added: false,
    },
    {
      songName: "Maan Meri Jaan",
      artistName: "King",
      image: "https://loremflickr.com/200/200/rapper,stage?lock=8",
      added: false,
    },
    {
      songName: "Heeriye",
      artistName: "Arijit Singh",
      image: "https://loremflickr.com/200/200/couple,music?lock=9",
      added: false,
    },
    {
      songName: "Tum Hi Ho",
      artistName: "Arijit Singh",
      image: "https://loremflickr.com/200/200/sad,song?lock=10",
      added: false,
    },
  ];

  const [gane, setGane] = useState(songs);

  const handleClick = (songIndex) => {
  setGane((prev) => {
    return prev.map((song, index) => {
      if (index === songIndex) {

        if (!song.added) {
          alert(`${song.songName} is added to fav.`);
        }

        return { ...song, added: !song.added };
      }

      return song;
    });
  });
};


const favCount = gane.filter(song => song.added).length;
// console.log(favCount)

  return (
    <div className="min-h-screen bg-stone-900 text-amber-100 p-1 ">
      <Navbar favCount={favCount} />
      <div className="flex flex-wrap max-w-7xl mx-auto mt-10">
        {gane?.map((song, index) => (
          <Card
            key={index}
            handleClick={handleClick}
            index={index}
            song={song}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
