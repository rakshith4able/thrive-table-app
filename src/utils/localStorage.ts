export function getFromLocalStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (!item) return null;

  try {
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Error parsing localStorage item "${key}":`, error);
    return null;
  }
}

export function setToLocalStorage<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to localStorage key "${key}":`, error);
  }
}

export function clearFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}
