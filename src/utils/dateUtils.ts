export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

export function calculateDaysSince(dateString: string): number {
  const today = new Date();
  const date = new Date(dateString);
  const diffTime = today.getTime() - date.getTime();
  return Math.floor(diffTime / (1000 * 3600 * 24));
}
