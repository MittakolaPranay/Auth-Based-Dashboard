function UserCard({ user, onDelete }) {
  return (
    <div className="border border-gray-700 bg-black text-white rounded-lg p-4 mb-4 shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-400">ID</p>
          <p className="font-medium">{user.id}</p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded ${
            user.role === "admin"
              ? "bg-red-600 text-white"
              : "bg-blue-600 text-white"
          }`}
        >
          {user.role}
        </span>
      </div>

      <div className="mt-3">
        <p className="text-sm text-gray-400">Username</p>
        <p className="font-semibold">{user.username}</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-400">Email</p>
        <p className="text-gray-300">{user.email}</p>
      </div>

      {onDelete && (
        <button
          onClick={() => onDelete(user.id)}
          className="mt-4 bg-red-700 hover:bg-red-800 text-white text-sm px-4 py-2 rounded transition"
        >
          Delete User
        </button>
      )}
    </div>
  );
}

export default UserCard;

