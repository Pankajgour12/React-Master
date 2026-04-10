import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { users, loading } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const navigate = useNavigate();

  const filteredUsers = users
    .filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* 🔥 CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* 🔥 HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Users Dashboard
          </h1>
          <p className="text-slate-400 text-sm">
            Manage and explore users
          </p>
        </div>

        {/* 🔥 CONTROLS */}
        <div className="bg-slate-800 p-4 rounded-xl mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Left */}
          <div className="flex gap-3 flex-wrap">
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 w-[220px] rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <button
              onClick={() => setSearch("")}
              className="px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600"
            >
              Clear
            </button>

            <button
              onClick={() =>
                setSortOrder(sortOrder === "asc" ? "desc" : "asc")
              }
              className="px-4 py-2 bg-sky-500 rounded-lg hover:bg-sky-400"
            >
              {sortOrder === "asc" ? "A → Z" : "Z → A"}
            </button>
          </div>

          {/* Right */}
          <p className="text-sm text-slate-400">
            {filteredUsers.length} Users
          </p>
        </div>

        {/* 🔥 CONTENT */}
        {loading ? (
          <div className="text-center text-slate-400 animate-pulse">
            Loading users...
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center text-slate-500">
            No users found
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredUsers.map(user => (
              <div
                key={user.id}
                onClick={() => navigate(`/users/${user.id}`)}
                className="bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition cursor-pointer"
              >
                {/* Avatar */}
                <div className="w-12 h-12 flex items-center justify-center bg-sky-500 rounded-full mb-4 text-lg font-bold">
                  {user.name.charAt(0)}
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold">
                  {user.name}
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                  {user.email}
                </p>

                <p className="text-sm text-sky-400 mt-2">
                  {user.company.name}
                </p>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Users;