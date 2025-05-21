import UsersTable from "./components/users/UsersTable";
import useUsers from "./hooks/useUsers";
const App = () => {
  const { users } = useUsers();
  return (
    <>
      <UsersTable />
      {users.length}
    </>
  );
};
export default App;
