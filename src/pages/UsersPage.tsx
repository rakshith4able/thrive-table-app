import UsersTable from "../components/users/UsersTable";
import useUsers from "../hooks/useUsers";

const UsersPage = () => {
  const { users, loading, error } = useUsers();

  return (
    <div className="w-full">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        <p className="text-gray-600 mt-1">
          Interactive table with virtualization, sorting, and column reordering
        </p>
      </header>

      {error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
          <div className="flex items-start">
            <div className="ml-3">
              <h3 className="text-red-800 font-medium">Error loading data</h3>
              <p className="text-red-700 mt-1">{error.message}</p>
              <button
                className="mt-2 px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200"
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow">
          <UsersTable users={users} isLoading={loading} />
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          User data generated with Faker.js and stored in localStorage
        </p>

        <button
          className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-xs"
          onClick={() => {
            localStorage.removeItem("users_data");
            localStorage.removeItem("userTable_columnOrder");
            window.location.reload();
          }}
        >
          Reset Data & Settings
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
