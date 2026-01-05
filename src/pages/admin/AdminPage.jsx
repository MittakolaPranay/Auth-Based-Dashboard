
function AdminPage() {
  return (
    <div className="min-h-screen w-screen bg-black p-6 text-gray-100">
      <h1 className="mb-6 text-2xl font-bold text-white">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-gray-900 p-4 shadow">
          <h2 className="text-sm text-gray-400">Total Users</h2>
          <p className="mt-2 text-2xl font-bold text-white">120</p>
        </div>

        <div className="rounded-lg bg-gray-900 p-4 shadow">
          <h2 className="text-sm text-gray-400">Admins</h2>
          <p className="mt-2 text-2xl font-bold text-white">5</p>
        </div>

        <div className="rounded-lg bg-gray-900 p-4 shadow">
          <h2 className="text-sm text-gray-400">Active Sessions</h2>
          <p className="mt-2 text-2xl font-bold text-white">32</p>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-gray-900 p-4 shadow">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Admin Actions
        </h2>

        <div className="flex gap-3">
          <button className="rounded bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700">
            Add User
          </button>

          <button className="rounded bg-red-600 px-4 py-2 text-sm font-medium hover:bg-red-700">
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
