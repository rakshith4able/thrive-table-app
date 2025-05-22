import { type User } from "../types/user";
import { generateUsers } from "../utils/generateUsers";
import { sleep } from "../utils/sleep";
import { USER_CONSTANTS } from "../constants/user";
import {
  clearFromLocalStorage,
  getFromLocalStorage,
  setToLocalStorage,
} from "../utils/localStorage";

const fetchUsers = async (): Promise<User[]> => {
  try {
    await sleep(USER_CONSTANTS.FETCH_DELAY_MS);
    const storedData = getFromLocalStorage<User[]>(USER_CONSTANTS.STORAGE_KEY);
    if (storedData) {
      return storedData;
    }

    const newUsers = generateUsers(USER_CONSTANTS.DEFAULT_COUNT);
    setToLocalStorage<User[]>(USER_CONSTANTS.STORAGE_KEY, newUsers);
    return newUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

const clearStoredUsers = (): void => {
  clearFromLocalStorage(USER_CONSTANTS.STORAGE_KEY);
};

export { fetchUsers, clearStoredUsers };
