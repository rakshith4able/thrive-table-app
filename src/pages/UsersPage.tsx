import UsersTable from "../components/users/UsersTable";
import { USER_CONSTANTS } from "../constants/user";
import useUsers from "../hooks/useUsers";

const UsersPage = () => {
  const { users, loading, error } = useUsers();

  return (
    <div className="w-full">
      <header className="mb-4 sm:mb-6 px-2 sm:px-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          User Management
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          Interactive table with virtualization, sorting, and column reordering
        </p>
      </header>

      {error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 mb-4 sm:mb-6 rounded-md mx-2 sm:mx-0">
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
        <div className="bg-white rounded-lg shadow mx-2 sm:mx-0 overflow-hidden">
          <UsersTable users={users} isLoading={loading} />
        </div>
      )}

      <div className="mt-6 sm:mt-8 text-center px-2 sm:px-0">
        <p className="text-xs sm:text-sm text-gray-500">
          User data generated with Faker.js and stored in localStorage
        </p>

        <button
          className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-xs"
          onClick={() => {
            localStorage.removeItem(USER_CONSTANTS.STORAGE_KEY);
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
