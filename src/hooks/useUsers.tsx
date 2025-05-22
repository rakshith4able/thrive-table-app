import { useState, useEffect } from "react";
import { type User } from "../types/User";
import { fetchUsers } from "../api/userApi";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error("Failed to load users:", err);
        setError(
          err instanceof Error ? err : new Error("Failed to load users")
        );
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return { users, loading, error };
};

export default useUsers;
