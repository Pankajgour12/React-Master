import axios from "axios";
import { useEffect, useState } from "react";

const Show = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const api = await axios.get("https://api.escuelajs.co/api/v1/users");
      const data = api.data; 
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <button
        // onClick={getUsers}
        className="mt-6 px-6 py-3 ml-10 bg-orange-500 text-white rounded-lg hover:bg-rose-600 transition"
      >
        Get Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {users?.map((user, index) => {
          return (
            <div
              key={index}
              className="bg-white flex flex-col items-center justify-center shadow-md rounded-xl p-4 border hover:shadow-xl transition"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="h-32 w-32 rounded-full object-contain mb-3"
              />

              <h2 className="text-md font-semibold mb-2">{user.name}</h2>

              <p className="text-green-600 font-bold mb-1">{user.email}</p>

              <p className="text-sm text-orange-500 mb-2">{user.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Show;
