function User() {
  return (
    <div className="min-h-screen w-screen bg-black p-6 text-gray-100">
      <h1 className="mb-6 text-2xl font-bold text-white">
        User Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-gray-900 p-4 shadow">
          <h2 className="text-sm text-gray-400">Profile</h2>
          <p className="mt-2 text-lg font-medium text-white">
            Welcome back 👋
          </p>
        </div>

        <div className="rounded-lg bg-gray-900 p-4 shadow">
          <h2 className="text-sm text-gray-400">Account Status</h2>
          <p className="mt-2 text-lg font-medium text-green-500">
            Active
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-gray-900 p-4 shadow">
        <h2 className="mb-2 text-lg font-semibold text-white">
          User Actions
        </h2>

        <div className="flex gap-3">
          <button className="rounded bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700">
            Update Profile
          </button>

          <button className="rounded bg-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
