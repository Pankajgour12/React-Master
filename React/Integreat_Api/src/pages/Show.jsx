import axios from 'axios'
import { useState } from 'react'

const Show = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const api = await axios.get("https://fakestoreapi.com/products")
    setUsers(api.data)
  }

  return (
    <div className="max-w-5xl mx-auto mt-10">

      <button
        onClick={getUsers}
        className="mt-6 px-6 py-3 ml-10 bg-orange-500 text-white rounded-lg hover:bg-rose-600 transition"
      >
        Get Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {users.map((user, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 border hover:shadow-xl transition"
            >
             
              <img
                src={user.image}
                alt={user.title}
                className="h-40 w-full object-contain mb-3"
              />

              
              <h2 className="text-md font-semibold mb-2">
                {user.title}
              </h2>

              
              <p className="text-green-600 font-bold mb-1">
                ₹ {user.price}
              </p>

              
              <p className="text-sm text-gray-500 mb-2">
                {user.category}
              </p>

              
              <p className="text-sm text-gray-600 line-clamp-2">
                {user.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Show