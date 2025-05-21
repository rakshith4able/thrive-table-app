import { Loader } from "./components/common/Loader";
import { generateUsers } from "./utils/generateUsers";

function App() {
  const users = generateUsers(5);
  return (
    <>
      <Loader />
      {users.map((user) => (
        <li>{user.firstName}</li>
      ))}
    </>
  );
}

export default App;
