import { DATE_CONSTANTS } from "../constants/date";

export function formatDate(date: Date): string {
  return date.toISOString().split("T")[DATE_CONSTANTS.ISO_DATE_SPLIT_INDEX];
}

export function calculateDaysSince(dateString: string): number {
  const today = new Date();
  const date = new Date(dateString);
  const diffTime = today.getTime() - date.getTime();
  return Math.floor(diffTime / DATE_CONSTANTS.MILLISECONDS_PER_DAY);
}
